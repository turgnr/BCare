import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import Loader from "../Loader";
import { IconButton, Switch } from "react-native-paper";
import axios from "axios";
import ReportButton from "../ReportButton";
import EmergencyButton from "../EmergencyButton";
export default function UpdateUser({ navigation }) {
  // const uri = "http://192.168.43.166:8081/login";
  // const getUserUri = "http://192.168.43.166:8081/RegisterPage";
  const uri = "http://192.168.1.7:8081/login";
  const getUserUri = "http://192.168.1.7:8081/RegisterPage";
  const [loading, setLoading] = useState(true);
  const [tableHead, SettableHead] = useState([]);
  const [user, setuser] = useState();
  const [tableCol, SettableCol] = useState([]);
  const [ListOfUser, setListOfUser] = useState([]);
  const [isSwitch, setisSwitch] = useState(false);
  useEffect(() => {
    axios.get(getUserUri).then((responseJson) => {
      setListOfUser(responseJson.data);
      console.log("users are download",responseJson.data);
    });
  }, []);

  useEffect(() => {
    if (ListOfUser != null && ListOfUser != undefined) {
      convertData(ListOfUser);
      if (tableCol) {
        setLoading(false);
      }
    } else {
    }
  }, [ListOfUser]);


  async function convertData(x) {
    if (x) {
      let head1 = [];
      Object.keys(x[0]).forEach((el, i) => {
        if (i != 6 && i != 0) {
          head1.push(el);
        }
      });
      await SettableHead(head1);
      console.log(head1);
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

  useEffect(() => {
    if (user != null && user != undefined) {
      convertData(user);
      if (tableCol) {
        setLoading(false);
      }
    } else {
    }
  }, [user]);

  function data(i, data) {
    switch (i) {
      case 3:
        return (
          <Switch
            value={isSwitch}
            onValueChange={() => setisSwitch(!isSwitch)}
            style={styles.btn}
          />
        );
        break;
      case 4:
        return (
          <IconButton
            icon="update"
            onPress={updateManager(data)}
            style={styles.btn}
          />
        );
        break;
      default:
        return data;
        break;
    }
  }

  function updateManager(user) {
    console.log(user);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row
          data={["המשתמש", "פלאפון", "אימייל", "מנהל"]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
      {loading ? (
        <Loader loading={loading} a={navigation} />
      ) : (
        tableCol.map((rowData, index) => (
          <Table key={index} borderStyle={{ borderColor: "transparent" }}>
            <ScrollView>
              <TableWrapper style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={data(cellData)}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            </ScrollView>
          </Table>
        ))
      )}
      <EmergencyButton />
      <ReportButton />
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
