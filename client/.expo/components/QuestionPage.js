import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

import { Button, TextInput } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";

export default function QuestionPage({ navigation }) {
  const [UserName, setuserName] = useState("user-Name");
  const [Password, setPass] = useState("pass-");
  const [Nuser, setNuser] = useState("user-Name");
  const [Npass, setNpass] = useState("pass");
  const uri = "http://192.168.1.9:8081/HomePage";

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center", backgroundColor: "#E5C7ED" }}>
          <Image
            source={require("E:/Repos/BCare/client/assets/logo.png")}
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
