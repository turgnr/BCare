import React, { Component, useEffect } from "react";
import { StyleSheet,Button, TextInput,  ScrollView, Text,View } from 'react-native';
//import { Button, TextInput } from "react-native-paper";
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

const survey = [
  {
      questionType: 'Info',
      questionText: 'Welcome to the React Native Simple Survey Example app! Tap next to continue'
  },
  {
      questionType: 'MultipleSelectionGroup',
      questionText:
          'כיצד היית מתארגת את מערכת היחסים שלך באופן כללי?',
      questionId: 'Q1',
      questionSettings: {
          maxMultiSelect: 2,
          minMultiSelect: 1,
          autoAdvance: true,
      },
      options: [
          {
              optionText: 'מתוחה מאוד',
              value: 2
          },
          {
              optionText: 'מתוחה',
              value: 1
          },
          {
              optionText: 'כלל לא',
              value: 0
          }
      ]
  },
  {
    questionType: 'MultipleSelectionGroup',
    questionText:
        'קנאה מוגזמת: הוא קנאי בצורה קיצונית ופוגע בפרטיות שלך עד כדי התנהגות אובססיבית?',
    questionId: 'Q2',
    questionSettings: {
        maxMultiSelect: 2,
        minMultiSelect: 1,
        autoAdvance: true,
    },
    options: [
        {
            optionText: 'כן',
            value: 2
        },
        {
            optionText: 'לפעמים',
            value: 1
        },
        {
            optionText: 'לא',
            value: 0
        }
    ]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      'רכושנות: הוא מחליט בשבילך ודורש את אישורו לכל דבר?',
  questionId: 'Q3',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      'בידוד: הוא מנסה לבודד אותך ממשפחה וחברים?',
  questionId: 'Q4',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      'חשדנות: הוא נוטה לחשדנות, ונתקף חרדה מהמחשבה שאת בוגדת בו?',
  questionId: 'Q5',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '6.	מצבי רוח קיצוניים: מצבי רוחו נוטים להשתנות במהירות מקיצוניות אחת לשנייה?',
  questionId: 'Q6',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '7.	הסתרה : האם את מרגישה שעלייך להסתיר מהקרובים לך את המצב ביניכם?',
  questionId: 'Q7',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '8.	האם את חוששת לומר לו שאת רוצה להיפרד? ',
  questionId: 'Q8',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '9.	האשמות: הוא מאשים אותך ואת הסביבה שלכם בבעיותיו?',
  questionId: 'Q9',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
//! לסיים לעקוך שאלות + סכימה של התוצאה והצגה בדף הבאה בהתאם לסוגי האלימות אם יש
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q10',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q11',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q12',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q13',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q14',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},
{
  questionType: 'MultipleSelectionGroup',
  questionText:
      '',
  questionId: 'Q20',
  questionSettings: {
      maxMultiSelect: 2,
      minMultiSelect: 1,
      autoAdvance: true,
  },
  options: [
    {
        optionText: 'כן',
        value: 2
    },
    {
        optionText: 'לפעמים',
        value: 1
    },
    {
        optionText: 'לא',
        value: 0
    }
]
},

   {
      questionType: 'Info',
      questionText: 'מיד תןעברי לדף המידע'
  },
];

const uri = "http://192.168.1.7:8081/HomePage";
export default class QuestionPage extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: GREEN,
        height: 40,
        elevation: 5,
      },
      headerTintColor: "#fff",
      headerTitle: "Sample Survey",
      headerTitleStyle: {
        flex: 1,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = { backgroundColor: PURPLE, answersSoFar: "" };
  }

  onSurveyFinished(answers) {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */

    const infoQuestionsRemoved = [...answers];

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {};
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value;
      console.log('answersAsObj[elem.questionId]: ',answersAsObj[elem.questionId],'   elem.value:', elem.value);
    }

    this.props.navigation.navigate("SurveyCompletedScreen", {
      answers: answersAsObj,
    });
  }

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  onAnswerSubmitted(answer) {
    this.setState({
      answersSoFar: JSON.stringify(this.surveyRef.getAnswers(), 2),
    });
    switch (answer.questionId) {
      case "favoriteColor": {
        if (COLORS.includes(answer.value.toLowerCase())) {
          this.setState({ backgroundColor: answer.value.toLowerCase() });
        }
        break;
      }
      default:
        console.log('answer.questionId: ',answer.questionId);
        break;
    }
  }

  renderPreviousButton(onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={"אחורה"}
        />
      </View>
    );
  }

  renderNextButton(onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={"הבא"}
        />
      </View>
    );
  }

  renderFinishedButton(onPress, enabled) {
    return (
      <View
        style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}
      >
        <Button
          title={"Finished"}
          onPress={onPress}
          disabled={!enabled}
          color={GREEN}
        />
      </View>
    );
  }

  renderButton(data, index, isSelected, onPress) {
    return (
      <View
        key={`selection_button_view_${index}`}
        style={{ marginTop: 5, marginBottom: 5, justifyContent: "flex-start" }}
      >
        <Button
          title={data.optionText}
          onPress={onPress}
          color={isSelected ? GREEN : PURPLE}
          style={isSelected ? { fontWeight: "bold" } : {}}
          key={`button_${index}`}
        />
      </View>
    );
  }

  renderQuestionText(questionText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    );
  }

  renderTextBox(onChange, value, placeholder, onBlur) {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => onChange(text)}
          numberOfLines={1}
          underlineColorAndroid={"white"}
          placeholder={placeholder}
          placeholderTextColor={"rgba(184,184,184,1)"}
          value={value}
          multiline
          onBlur={onBlur}
          blurOnSubmit
          returnKeyType="done"
        />
      </View>
    );
  }

  renderNumericInput(onChange, value, placeholder, onBlur) {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={(text) => {
          onChange(text);
        }}
        underlineColorAndroid={"white"}
        placeholderTextColor={"rgba(184,184,184,1)"}
        value={String(value)}
        placeholder={placeholder}
        keyboardType={"numeric"}
        onBlur={onBlur}
        maxLength={3}
      />
    );
  }

  renderInfoText(infoText) {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={[
          styles.background,
          { backgroundColor: this.state.backgroundColor },
        ]}
      >
        <View style={styles.container}>
          <SimpleSurvey
            ref={(s) => {
              this.surveyRef = s;
            }}
            survey={survey}
            renderSelector={this.renderButton.bind(this)}
            containerStyle={styles.surveyContainer}
            selectionGroupContainerStyle={styles.selectionGroupContainer}
            navButtonContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            renderPrevious={this.renderPreviousButton.bind(this)}
            renderNext={this.renderNextButton.bind(this)}
            renderFinished={this.renderFinishedButton.bind(this)}
            renderQuestionText={this.renderQuestionText}
            onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
            onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
            renderTextInput={this.renderTextBox}
            renderNumericInput={this.renderNumericInput}
            renderInfo={this.renderInfoText}
          />
        </View>

        <ScrollView style={styles.answersContainer}>
          <Text style={{ textAlign: "center" }}>JSON output</Text>
          <Text>{this.state.answersSoFar}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 30,
    width: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    minWidth: "70%",
    maxWidth: "90%",
    alignItems: "stretch",
    justifyContent: "center",

    borderRadius: 10,
    flex: 1,
  },
  answersContainer: {
    width: "90%",
    maxHeight: "20%",
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 20,
    borderRadius: 10,
  },
  surveyContainer: {
    width: "auto",
    alignSelf: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: "center",
    padding: 5,
    flexGrow: 0,
    elevation: 20,
  },
  selectionGroupContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignContent: "flex-end",
  },
  navButtonText: {
    margin: 10,
    fontSize: 20,
    color: "white",

    width: "auto",
  },
  answers: {
    alignSelf: "center",
    marginBottom: 10,
  },
  navigationButton: {
    minHeight: 40,
    backgroundColor: GREEN,
    padding: 0,
    borderRadius: 100,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
  },
  textBox: {
    borderWidth: 1,
    borderColor: "rgba(204,204,204,1)",
    backgroundColor: "white",
    borderRadius: 10,

    padding: 10,
    textAlignVertical: "top",
    marginLeft: 10,
    marginRight: 10,
  },
  numericInput: {
    borderWidth: 1,
    borderColor: "rgba(204,204,204,1)",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    marginLeft: 10,
    marginRight: 10,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
  },
});
