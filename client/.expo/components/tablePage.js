import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import {
  SafeAreaView,
  StyleSheet,
  Linking,
  View,
  StatusBar,
} from "react-native";
import { DataTable } from "react-native-paper";

import { Button, TextInput } from "react-native-paper";
import axios from "axios";
import EmergencyButton from "./EmergencyButton";

export default function tablePage({ navigation }) {
  const https = "https://";
  const [loading, setLoading] = useState(true);
  const [ListofAssociations, SetListofAssociations] = useState([]);
  const uri = "http://192.168.1.7:8081/tablePage";
  useEffect(() => {
    axios
      .get(uri)
      .then((responseJson) => {
        console.log(responseJson.data);
        setLoading(false);
        SetListofAssociations(responseJson.data);
      });
  }, []);
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
                onPress={() => {
                  console.log(`selected account ${element.webSite}`);
                }}
              >
                <DataTable.Cell>{element.Name}</DataTable.Cell>
                <DataTable.Cell>{element.Address}</DataTable.Cell>
                <DataTable.Cell
                  onPress={() => {
                    Linking.openURL(`tel:${element.PhoneNumber}`);
                  }}
                >
                  {element.PhoneNumber.toString()}
                </DataTable.Cell>
                <DataTable.Cell>{element.Email}</DataTable.Cell>
                <DataTable.Cell
                  onPress={() => {
                    Linking.openURL(https + element.webSite);
                  }}
                >
                  {element.Name}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })
        ) : (
          <Loader loading={loading} />
        )}
        {/* <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            //console.log();
          }}
          label="1-2 of 6"
        /> */}
      </DataTable>
      <EmergencyButton/>
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
