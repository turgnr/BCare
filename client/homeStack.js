import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./.expo/components/Login";
import HomePage from "./.expo/components/HomePage";
import RegisterPage from "./.expo/components/RegisterPage";
import Test from "./.expo/components/Test";
import QuestionPage from "./.expo/components/QuestionPage";
import xPage from "./.expo/components/xPage";
import tablePage from "./.expo/components/tablePage";
import infoPage from "./.expo/components/infoPage";
import UpdateUser from "./.expo/components/manager/UpdateUser";
import AddAssociation from "./.expo/components/manager/AddAssociation";
import SurveyCompletedScreen from "./.expo/components/SurveyCompletedScreen";
import ViolenceTypes from "./.expo/components/ViolenceTypes";
import WarningSign from "./.expo/components/WarningSign";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "התחברות" }}
      />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{ title: "הרשמה" }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "ברוכה הבאה" }}
      />
      <Stack.Screen
        name="QuestionPage"
        component={QuestionPage}
        options={{ title: "שאלון" }}
      />
      <Stack.Screen
        name="xPage"
        component={xPage}
        options={{ title: "אודות ומקורות" }}
      />
      <Stack.Screen
        name="tablePage"
        component={tablePage}
        options={{ title: "עמותות" }}
      />
      <Stack.Screen
        name="infoPage"
        component={infoPage}
        options={{ title: "זכויות ומידע משפטי" }}
      />
      <Stack.Screen
        name="SurveyCompletedScreen"
        component={SurveyCompletedScreen}
        options={{ title: "תוצאות" }}
      />
      <Stack.Screen
        name="ViolenceTypes"
        component={ViolenceTypes}
        options={{ title: "סוגי אלימות" }}
      />
       <Stack.Screen
        name="WarningSign"
        component={WarningSign}
        options={{ title: "סוגי אלימות" }}
      />
      <Stack.Screen
        name="AddAssociation"
        component={AddAssociation}
        options={{ title: "הוספת עמותה" }}
      />
    </Stack.Navigator>
  );
}
