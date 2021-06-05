import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const GREEN = "rgba(141,196,63,1)";
const PURPLE = "rgba(108,48,237,1)";
const defaultAnswers = {
  favoriteColor: "nothing",
  favoriteNumber: "0",
  favoritePet: "nothing",
};
export default class SurveyCompletedScreen extends Component {
  constructor(props) {
    super(props);
    console.log('answers',this.props.route.params.answers);
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: "#fff",
      headerTitle: "Survey Results",
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  render() {
    const { answers } = this.props.route.params;

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.questionText}>התוצאות הם:</Text>
            <Text style={styles.questionText}>
             the result are: {answers.res1}
             ,{answers.res2}
             ,{answers.res3}
             ,{answers.res4}
             ,{answers.res5}
             ,{answers.res6}
            </Text>
          </ScrollView>
        </View>
        <Button
        icon="pan_tool"
        mode="contained"
        onPress={() => {
          this.props.navigation.navigate("HomePage");
        }}
        style={{ backgroundColor: "blue" }}
      >
        חזרה למסך הבית
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PURPLE,
  },
  container: {
    minWidth: "70%",
    maxWidth: "90%",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 20,
    borderRadius: 10,
    maxHeight: "80%",
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
});
