import React, { useState, useEffect, useFocusEffect, useCallback } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import axios from "axios";
import { Button, TextInput } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";


export default function Login({ navigation }) {
  const [user, setuserName] = useState("");
  const [password, setPass] = useState("");
  const [backPressedCount, setBackPressedCount] = useState(0);
  const [errortext, setErrortext] = useState("");
  //const uri = "http://192.168.1.7:8081/login";
  const uri = "http://192.168.43.166:8081/login";
  //const uri = "http://127.0.0.1:8081/login";

  useEffect(() => {
    if (backPressedCount === 2) {
      BackHandler.exitApp();
    }
  }, [backPressedCount]);

 const checkFiled= () =>{
    if(!user){
      setErrortext('שם משתמש חסר');
      return false;
    }
    if(!password)
    {
      setErrortext('סיסמא חסרה');
      return false; 
    }
    setErrortext("");
    return true;
  }




  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="שם משתמש"
        value={user}
        placeholder="הכנסי שם משתמש"
        onChangeText={(user) => setuserName(user)}
        />
      <TextInput
        label="סיסמא"
        Type="outline"
        placeholder="הכנסי סיסמא"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPass(password)}
        />
        {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
      <Button
        icon="account-arrow-right"
        mode="contained"
        onPress={() => {
          if(checkFiled())
          {
            console.log("GET - Login");
            axios
              .get(uri, {
                params: {
                  UserName: user,
                  Password: password,
                },
              })
              .then(function (response) {
                if(response.status == 200)
                {
                  navigation.navigate("HomePage", {
                    a: response.data.userapproved,
                  });
                }
                if(response.status == 203){
                  setErrortext("שם משתמש או סיסמא לא נכונים");
                  setPass("");
                  setuserName("");
                }
              })
              .catch(function (error) {
                console.log('error',error);
              });
          }}
          }
      >
        התחברי
      </Button>
      <Button
        icon="playlist-edit"
        mode="contained"
        onPress={() => {
          navigation.navigate("RegisterPage");
        }}
      >
        להרשמה
      </Button>
      <Button
        icon="account-arrow-right-outline"
        mode="contained"
        onPress={() => {
          navigation.navigate("HomePage", {
            a: "אורחת",
          });
        }}
      >
        אורחת
      </Button>
      <EmergencyButton/>
      <ReportButton/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
