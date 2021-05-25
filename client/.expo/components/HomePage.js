import React, { useState,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  BackHandler,
} from "react-native";

import { Button } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";

export default function HomePage({ navigation, route }) {
  const { a } = route.params; //the name of user are log-in
  const [Nid, setid] = useState(a);

useEffect(() => {
  Nid? Nid:setid(a);
  console.log(a);
  console.log(route.params);
  return () => {
    
  }
}, [])
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Button
          icon="information-variant"
          mode="contained"
          onPress={() => navigation.navigate("infoPage")}
        >
          מידע
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="account-question"
          mode="contained"
          onPress={() => navigation.navigate("QuestionPage")}
        >
          שאלון 
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="account-circle"
          mode="contained"
          onPress={() => navigation.navigate("xPage")}
        >
          אודות
        </Button>
      </SafeAreaView>
      <SafeAreaView>
        <Button
          icon="heart-multiple"
          mode="contained"
          onPress={() => navigation.navigate("testTable")}
        >
          רשימת עמותות
        </Button>
      </SafeAreaView>
      <Text>
         {Nid} שלום
      </Text>
      <EmergencyButton/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
