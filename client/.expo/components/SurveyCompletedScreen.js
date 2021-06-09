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
    /*
      1-10 כללי res1
      11-16 פיזית res2
      17-18 טכנולוגית res3
      19-22 מינית res4
      23-27 נפשית.מילולית res5
      28-30 כלכלית res6
       */
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.questionText}>התוצאות הם:</Text>
            <Text style={styles.questionText}>
              השאלון נבנה על בסיס מאגרים הנמצאים באינטרנט השימוש בשאלון הוא על
              אחריותך בלבד ונועד לצורכי הדגמה :על פי תוצאות השאלון הינך
            </Text>
            {answers.res1 > 3 ? (
              <Text style={styles.questionText}>אלימות כל שהיא</Text>
            ) : null}
            {answers.res1 > 3 && answers.res1 < 9 ? (
              <Text style={styles.questionText}>ובסכנה</Text>
            ) : null}
            {answers.res1 > 9 ? (
              <Text style={styles.questionText}>ובסכנה גבוהה</Text>
            ) : null}
            {answers.res2 >= 5 ? (
              <Text style={styles.questionText}>אלימות פיזית</Text>
            ) : null}
            {answers.res3 > 3 ? (
              <Text style={styles.questionText}>אלימות טכנולוגית</Text>
            ) : null}
            {answers.res4 >= 5 ? (
              <Text style={styles.questionText}>אלימות מינית</Text>
            ) : null}
            {answers.res5 >= 5 ? (
              <Text style={styles.questionText}>אלימות נפשית\מילולית</Text>
            ) : null}
            {answers.res6 > 4 ? (
              <Text style={styles.questionText}>אלימות כלכלית</Text>
            ) : null}
            {answers.res1 < 3 &&
            answers.res2 < 6 &&
            answers.res3 < 4 &&
            answers.res4 < 6 &&
            answers.res5 < 6 &&
            answers.res6 < 5 ? (
              <Text style={styles.questionText}>
                לא נמצאת תחת שום קטגוריה של אלימות אם הינך מרגישה בכל זאת מאוימת
                פני לגורמי המקצוע או בעמוד עמותות בדף הבית
              </Text>
            ) : null}
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
