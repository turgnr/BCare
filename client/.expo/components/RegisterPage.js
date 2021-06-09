import React, { createRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import Loader from "./Loader";
import { TextInput } from "react-native-paper";
import { useHeaderHeight } from "@react-navigation/stack";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function RegisterPage({ navigation }) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const [listOfUsers, setListOfUsers] = useState([]);
  const [location, setLocation] = useState({});
  const [user,SetUser]=useState();
  const uri = "http://192.168.1.3:8081/RegisterPage";
  //const uri = "http://192.168.43.166:8081/RegisterPage";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(JSON.stringify(position)).then(() => {
        console.log("location", location);
      });
      console.log("position", position);
    });
  }, []);

  useEffect(() => {
    axios
      .get(uri, {
        // chang to mock server
        method: "GET",
        headers: {
          //Header Definition
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.data)
      .then((responseJson) => {
        setListOfUsers(responseJson);
        console.log("data download");
      });
  }, []);

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("שם משתמש חסר");
      return;
    }
    if (!userPass) {
      alert("סיסמא חסרה");
      return;
    }
    if (!userEmail) {
      alert("אימייל חסר");
      return;
    }
    if (!userAge) {
      alert("גיל חסר");
      return;
    }
    if (!userPhone) {
      alert("מספר פלאפון חסר");
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      UserName: userName,
      Email: userEmail,
      Age: userAge,
      PhonNumber: userPhone,
      Password: userPass,
      Address: {
        lat: location.latitude,
        lon: location.longitude,
      },
      isValid: false, //filed are respon on Manger(true) or regular user(false)
    };
    SetUser(dataToSend);
    axios
      .post(uri, dataToSend)
      .then((responseJson) => {
        //Hide Loader
        console.log("responseJson", responseJson);
        setLoading(false);
        // If server response message same as Data Matched
        if (responseJson.status == 200) {
          setIsRegistraionSuccess(true);
          console.log("הרשמה נקלטה בהצלחה");
        } else {
          console.log("ההרשמה נכשלה");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#d96de3",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("/Repos/BCare/client/assets/icon.png")}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>הרשמתך נקלטה בהצלחה</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("HomePage", {
              a: user,
            })
          }
        >
          <Text style={styles.buttonTextStyle}>למסך הבית</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Loader loading={loading} a={navigation} />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center", backgroundColor: "#E5C7ED" }}>
          <Image
            source={require("/Repos/BCare/client/assets/logo.png")}
            style={styles.SectionStyleLogo}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="שם משתמש"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
              onEndEditing={() => {
                let flagError = false;
                listOfUsers.forEach((element) => {
                  if (userName === element.UserName) {
                    flagError = true;
                  }
                });
                setErrortext(flagError ? "שם משתמש תפוס" : "");
              }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Userpass) => setUserPass(Userpass)}
              underlineColorAndroid="#f000"
              placeholder="הכנס סיסמא"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="הכנס כתובת מייל"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPhone) => setUserPhone(UserPhone)}
              underlineColorAndroid="#f000"
              placeholder="פלאפון"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
              onEndEditing={() => {
                let flagError = false;
                if (isNaN(userPhone) || !(userPhone.length === 10))
                  flagError = true;
                setErrortext(flagError ? "מספר פלאפון חוקי בעל 10 ספרות" : "");
              }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="הכנס גיל"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current && addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyleM}>
            <Text>סמני את מיקומך בעזרת הסמן</Text>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapStyle}
              region={{
                latitude: location.latitude ? location.latitude : 31.652,
                longitude: location.longitude ? location.longitude : 34.7411,
                latitudeDelta: 0.0016303586663286,
                longitudeDelta: 0.001121738708019257,
              }}
              onRegionChangeComplete={(region) => {
                setLocation(region);
              }}
            >
              {location != null ? (
                <Marker
                  title="כתובתך"
                  coordinate={{
                    latitude: location.longitude ? location.latitude : 31.652,
                    longitude: location.longitude
                      ? location.longitude
                      : 34.7411,
                  }}
                  draggable
                />
              ) : null}
            </MapView>
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
            disabled={errortext != ""}
          >
            <Text style={styles.buttonTextStyle}>הרשמה</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
      <EmergencyButton />
      <ReportButton />
    </View>
  );
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
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
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  mapStyle: {
    height: "80%",
    width: "90%",
  },

  SectionStyleM: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    height: 150,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  SectionStyleLogo: {
    flexDirection: "row",
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    resizeMode: "contain",
  },
});
