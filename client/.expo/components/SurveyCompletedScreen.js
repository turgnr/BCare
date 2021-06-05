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
             How you {answers.Q1.questionId}: {answers.Q1[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q2.questionId}: {answers.Q2[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q3.questionId}: {answers.Q3[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q4.questionId}: {answers.Q4[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q5.questionId}: {answers.Q5[0].value}
            </Text>
            <Text style={styles.questionText}>
               How you {answers.Q6.questionId}: {answers.Q6[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q7.questionId}: {answers.Q7[0].value}
            </Text>
            <Text style={styles.questionText}>
             How you {answers.Q8.questionId}: {answers.Q8[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q9.questionId}: {answers.Q9[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q10.questionId}: {answers.Q10[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q11.questionId}: {answers.Q11[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q12.questionId}: {answers.Q12[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q13.questionId}: {answers.Q13[0].value}
            </Text>
            <Text style={styles.questionText}>
            How you {answers.Q14.questionId}: {answers.Q14[0].value}
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
