import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Linking } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import Loader from "../Loader";
import { IconButton } from "react-native-paper";
import axios from "axios";
import ReportButton from "../ReportButton";
import EmergencyButton from "../EmergencyButton";
export default function UpdateUser({ navigation }) {
  const uri = "http://192.168.43.166:8081/login";
  const getUserUri = "http://192.168.43.166:8081/RegisterPage";
  // const uri = "http://192.168.1.7:8081/login";
  // const getUserUri = "http://192.168.1.7:8081/RegisterPage";
  const [loading, setLoading] = useState(true);
  const [tableHead, SettableHead] = useState([]);
  const [user, setuser] = useState();
  const [tableCol, SettableCol] = useState([]);
  const [ListOfUser, setListOfUser] = useState([]);
  const [isSwitch, setisSwitch] = useState(false);
  useEffect(() => {
    axios.get(getUserUri).then((responseJson) => {
      setListOfUser(responseJson.data);
    });
  }, []);

  useEffect(() => {
    if (ListOfUser.length != 0) {
      convertData(ListOfUser);
    }
  }, [ListOfUser]);

  useEffect(() => {
    console.log("change tableCol");
    if (tableCol != 0) {
      setLoading(false)
    }
  }, [tableCol]);

 function setData(data,num,rowd)
  {
    console.log('data', data,'num',num,'rowd',rowd);
    tableCol
  }

  async function convertData(x) {
    if (x) {
      let head1 = [];
      Object.keys(x[0]).forEach((el, i) => {
        if (el == "UserName" || el == "Email" || el == "isValid") {
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
            if (key === "isValid") {
              col.push(col1);
            }
          }
        }
      });
      await SettableCol(col);
    }

    //if (tableCol) setLoading(false);
  }

  function data(i, data,num,rowd) {
    switch (i) {
      case 1:
        return (
          <IconButton
            icon="email"
            onPress={() =>
              Linking.openURL("mailto:" + data + "?subject=יש לשנות נושא&body=")
            }
            style={styles.btn}
          />
        );
        break;
      case 2:
       if(data)
       {
          return "כן";
       }
       else{return "לא";}
        break;
      case 3:
        return (
          <IconButton
            icon="web"
            onPress={() =>
              Linking.openURL("mailto:" + data + "?subject=יש לשנות נושא&body=")
            }
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
    console.log("user", user);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <ScrollView horizontal={true} > */}
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row
            data={["המשתמש", "אימייל", "מנהל", "עדכן"]}
            style={styles.row}
            textStyle={styles.text}
          />
        </Table>
        {loading ? (
          <Loader loading={loading} a={navigation} />
        ) : (
          tableCol.map((rowData, index) => (
            <Table key={index} borderStyle={{ borderColor: "transparent",direction:'rtl' }}>
              <ScrollView>
                <TableWrapper style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={data(cellIndex, cellData,index,rowData)}
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              </ScrollView>
            </Table>
          ))
        )}
      </ScrollView>
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
    direction:'rtl'
  },
  head: { height: 40, backgroundColor: "#DF7EE8" },
  text: { color: "white",maxWidth:45 },
  row: { flexDirection: "row",direction:'rtl',backgroundColor:"#B588D8"},
  btn: {
    width: 35,
    height: 35,
    backgroundColor: "#8F69D4",
    borderRadius: 2,
    textAlign:"right",
  },
});
