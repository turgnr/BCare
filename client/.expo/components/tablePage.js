import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import {
  SafeAreaView,
  StyleSheet,
  Linking,
  View,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import {Button ,DataTable} from "react-native-paper";
import axios from "axios";
import EmergencyButton from "./EmergencyButton";

export default function tablePage({ navigation }) {
  const https = "https://";
  const [loading, setLoading] = useState(true);
  const [ListofAssociations, SetListofAssociations] = useState([]);
  const uri = "http://192.168.1.7:8081/tablePage";
  useEffect(() => {
    axios.get(uri).then((responseJson) => {
      setLoading(false);
      SetListofAssociations(responseJson.data);
    });
  }, []);

  //! update table and use in table-component
  return (
    <SafeAreaView style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>שם</DataTable.Title>
          <DataTable.Title>כתובת</DataTable.Title>
          <DataTable.Title>טלפון</DataTable.Title>
          <DataTable.Title>אימייל</DataTable.Title>
          <DataTable.Title>אתר העמותה</DataTable.Title>
        </DataTable.Header>
        {!loading ? (
          ListofAssociations.map((element) => {
            return (
              <DataTable.Row
                key={element._id}
                size={50}
                onPress={() => {
                  console.log(`selected account ${element.webSite}`);
                }}
              >
                <DataTable.Cell width="30">{element.Name}</DataTable.Cell>
                <DataTable.Cell>
                  <View>
                    <Button
                      icon="phone"
                      size={5}
                      onPress={() => {
                        //Linking.openURL(https + element.webSite);
                        console.log("loca");
                      }}
                    />
                  </View>
                </DataTable.Cell>
                <DataTable.Cell
                  onPress={() => {
                    Linking.openURL(`tel:${element.PhoneNumber}`);
                  }}
                ></DataTable.Cell>
                <DataTable.Cell>
                  <Button
                    mode="contained"
                    icon="pan_tool"
                    compact="true"
                    mode="contained"
                    onPress={() => {
                      console.log("sdfg");
                    }}
                  ></Button>{" "}
                </DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <Loader loading={loading} />
        )}

      </DataTable>
      <EmergencyButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
