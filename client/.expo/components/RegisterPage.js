import React, { createRef, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Loader from "./Loader";
import { TextInput } from "react-native-paper";
import MapView, { Marker,PROVIDER_GOOGLE } from "react-native-maps";

export default function RegisterPage({ navigation }) {
  const [userName, setUserName] = useState("");
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

  useEffect(() => {
    fetch("http://localhost:8081/RegisterPage", {
      // chang to mock server
      method: "GET",
      headers: {
        //Header Definition
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setListOfUsers(responseJson);
      });
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position).then(()=>{console.log("location", location)});
        console.log("position", position);
      }
    );
  }, []);
  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("Please fill Name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userAge) {
      alert("Please fill Age");
      return;
    }
    if (!userAddress) {
      alert("Please fill Address");
      return;
    }
    //Show Loader
    // !!! complete the field of USER object scheme
    setLoading(true);
    var dataToSend = {
      UserName: userName,
      Email: UserEmail,
      Age: UserAge,
      PhonNumber: userPhone,
      Password: "12",
      Address: {
        lat: "12",
        lon: "12",
      },
      isValid: true,
    };
    fetch("http://localhost:8081/RegisterPage", {
      // chang to mock server
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        //Header Definition
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          setIsRegistraionSuccess(true);
          console.log("Registration Successful. Please Login to proceed");
        } else {
          setErrortext("Registration Unsuccessful");
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
          source={require("E:/Repos/Bcare/client/assets/icon.png")}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <SafeAreaView style={{ alignItems: "center" }}>
          <Image
            source={require("E:/Repos/Bcare/client/assets/logo.png")}
            style={{
              width: "100%",
              height: 95,
              resizeMode: "contain",
              margin: 30,
            }}
          />
        </SafeAreaView>
        <KeyboardAvoidingView enabled>
          <SafeAreaView style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
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
                setErrortext(flagError ? "change user name" : "");
              }}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Enter Age"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current && addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapStyle}
              region={{
                latitude: location.latitude ? location.latitude : 31.652,
                longitude: location.longitude ? location.longitude : 34.7411,
                latitudeDelta: 0.0016303586663286,
                longitudeDelta: 0.001121738708019257,
              }}
            >
              <Marker
                title="address"
                coordinate={{
                  latitude: location.latitude ? location.latitude : 31.652,
                  longitude: location.longitude ? location.longitude : 34.7411,
                }}
                draggable
              />
            </MapView>
            {/* <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAddress) => setUserAddress(UserAddress)}
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={addressInputRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            /> */}
          </SafeAreaView>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: "red",
  },
  buttonStyle: {
    backgroundColor: "#C5ACCC",
    borderWidth: 0,
    color: "#8C7891",
    borderColor: "#4FFA00",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "black",
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
    height: "100%",
    width: "100%",
  },
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 50,
    height: "30%", // 70% of height device screen
    width: "85%", // 80% of width device screen
    backgroundColor: "#8D8D8D",
    alignItems: "center",
    justifyContent: "center",
  },
});
