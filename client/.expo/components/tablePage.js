import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  SafeAreaView,
} from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import Loader from "./Loader";
import { Button, IconButton, Colors } from "react-native-paper";
import axios from "axios";
import EmergencyButton from "./EmergencyButton";

export default function tablePage({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [tableHead, SettableHead] = useState([]);
  const [tableCol, SettableCol] = useState([]);
  const [x, setX] = useState();
  const uri = "http://192.168.1.7:8081/tablePage";
  useEffect(() => {
    axios.get(uri).then((responseJson) => {
      setX(responseJson.data);
    });
  }, []);

  useEffect(() => {
    if (x != null && x != undefined) {
      convertData(x);
      if (tableCol) {
        setLoading(false);
      }
    } else {
    }
  }, [x]);

  //set the data fit for table
  async function convertData(x) {
    if (x) {
      let head1 = [];
      Object.keys(x[0]).forEach((el, i) => {
        if (i != 6 && i != 0) {
          head1.push(el);
        }
      });
      await SettableHead(head1);
      let col = [];
      x.forEach((el) => {
        let col1 = [];
        for (const [key, value] of Object.entries(el)) {
          if (head1.includes(key)) {
            col1.push(value);
            if (key === "webSite") {
              col.push(col1);
            }
          }
        }
      });
      await SettableCol(col);
    }

    if (tableCol) setLoading(false);
  }
  //create the iconButton in the cells table
  function data(i, data) {
    switch (i) {
      case 2:
        return (
          <IconButton
            icon="phone"
            onPress={() => Linking.openURL(`tel:${data}`)}
            style={styles.btn}
          />
        );
        break;
      case 3:
        return (
          <IconButton
            icon="email"
            onPress={() =>
              Linking.openURL(
                "mailto://mailto:" + data + "?subject=יש לשנות נושא&body=body"
              )
            }
            style={styles.btn}
          />
        );
        break;
      case 4:
        return (
          <IconButton
            icon="web"
            onPress={() => Linking.openURL(data)}
            style={styles.btn}
          />
        );
        break;
      default:
        return data;
        break;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row
          data={["העמותה", "כתובת", "פלאפון", "אימייל", "אינטרנט"]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        tableCol.map((rowData, index) => (
          <Table key={index} borderStyle={{ borderColor: "transparent" }}>
            <ScrollView>
              <TableWrapper style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={data(cellIndex, cellData)}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            </ScrollView>
          </Table>
        ))
      )}
      <EmergencyButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#ff00d2",
  },
  head: { height: 40, backgroundColor: "#DF7EE8" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#C18EE9" },
  btn: {
    width: 35,
    height: 35,
    backgroundColor: "#8F69D4",
    borderRadius: 2,
    textAlign: "center",
  },
});
