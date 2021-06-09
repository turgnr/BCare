import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  BackHandler,
} from "react-native";

import { Button } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function HomePage({ navigation, route }) {
  const { a } = route.params; //the name of user are log-in
  const [Nid, setid] = useState(a.UserName ? a.UserName : a);
  const [manager, setManager] = useState(a.isValid ? a.isValid : false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{Nid} שלום</Text>
      {a.UserName ? (
        <SafeAreaView>
          <Button
            icon="account-question"
            mode="contained"
            onPress={() => navigation.navigate("QuestionPage")}
          >
            שאלון
          </Button>
        </SafeAreaView>
      ) : null}
      <SafeAreaView>
        <Button
          icon="heart-multiple"
          mode="contained"
          onPress={() => navigation.navigate("tablePage")}
        >
          רשימת עמותות
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="alert-octagon"
          mode="contained"
          onPress={() => navigation.navigate("WarningSign")}
        >
          סימני אזהרה והתגוננות
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="alert-octagon"
          mode="contained"
          onPress={() => navigation.navigate("ViolenceTypes")}
        >
          סוגי אלימות
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="information-variant"
          mode="contained"
          onPress={() => navigation.navigate("infoPage")}
        >
          זכויות ומידע משפטי
        </Button>
      </SafeAreaView>
      {manager ? (
        <SafeAreaView>
          <Button
            icon="account-question"
            mode="contained"
            onPress={() => navigation.navigate("AddAssociation")}
          >
            למסך מנהל
          </Button>
        </SafeAreaView>
      ) : null}
      <SafeAreaView>
        <Button
          icon="account-circle"
          mode="contained"
          onPress={() => navigation.navigate("xPage")}
        >
          אודות
        </Button>
      </SafeAreaView>
      <EmergencyButton />
      <ReportButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    backgroundColor: "#BB4DDA",
    borderWidth: 0,
    color: "#A63EC4",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
