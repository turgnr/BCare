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

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}options={{ title: 'התחברות'}}/>
      <Stack.Screen name="Test" component={Test}/>
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ title: 'הרשמה'}}/>
      <Stack.Screen name="HomePage" component={HomePage}  options={{ title: 'ברוכה הבאה'}}/>
      <Stack.Screen name="QuestionPage" component={QuestionPage} options={{ title: 'שאלון'}}/>
      <Stack.Screen name="xPage" component={xPage} />
      <Stack.Screen name="tablePage" component={tablePage} 
      options={{ title: 'עמותות'}}/>
      <Stack.Screen name="infoPage" component={infoPage} options={{ title: 'מידע'}}/>
    </Stack.Navigator>
  );
}
