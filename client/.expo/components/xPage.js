import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import { Button, Avatar } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function xPage({ navigation }) {
 const uri = "http://192.168.1.3:8081/HomePage";
  //const uri = "http://192.168.43.166:8081/HomePage";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerContainer}>B-care</Text>
        <Text style={styles.warnings}>
          המידע באפליקציה נאסף ממקורות המפורטים מטה השימוש במידע באחריותך בלבד
        </Text>
        <View style={{ backgroundColor: "red" }}>
          <Text style={{ color: "white", marginHorizontal: 5,fontSize: 22, }}>
            בשנים האחרונות חלה עלייה מטרידה במספר התלונות על אלימות במשפחה ועל
            אלימות נגד נשים ובפרט בתקופת הקורונה. מתחילת שנת 2020 נרצחו בישראל
            20 נשים. 12 מתוכן ע"י בני זוגן. אחת מכל שלוש נשים שנרצחו בידי בני
            זוגן התלוננה קודם במשטרה. אחת מכל שלוש נשים בישראל תחווה אלימות או
            תהיה בסיכון במהלך חייה. B-Care הוקמה במטרה לתת מענה לנשים החושבות או
            חשות בסיכון בסביבתן. באמצעות אפליקציה זו ניתן לקבל ולהנגיש מידע כללי
            וחשוב אודות סוגי אלימות, עמותות, כתובות, סימני אזהרה והנחיות
            התגוננות במצבי סיכון, גורמים רלוונטיים הקשורים לנושא, לכל אישה אשר
            חשה בסיכון או שאינה יודעת האם היא באמת במעגל הסיכון והשאלה העיקרית
            האם קיים סיכון לחיי המשתמשת ולאמת את חששותיה ע"י השאלון זיהוי לבדיקת
            סיכון אם קיים ורמת הסיכון, להניק לה את המידע והכלים הדרושים להתמודד
            במצב אלימות וסיכון, כאמצעי להעברת מידע, שכן הנגשת המידע שעומד בבסיסה
            של האפליקציה הוא המטרה. באפליקציה אנו נפנה לשני קהלי יעד עיקריים:
            אישה החשה/חושדת שהיא בסיכון, אורח/ מדווח אשר רוצה לקבל מידע ולדווח
            על מקרה/חשד שקיים בסביבתו אלימות כזו או אחרת כלפי אישה. כיום, קיימות
            אפליקציות בודדות חלקן עוד בפיתוח, או במסגרת האקתון מיכל סלה כמו
            safeUP המשמשת כרשת קהילתית שמאפשרת לנשים להגן אחת על השנייה,
            אפליקציה נוספת הנקראת sekura בעלת ארבעה כפתורים ופונקציות שנוצרה
            לסייע לביטחון בסיטואציות שונות כמו הליכה לבד בלילה, אפליקציות אלו
            בשונה מהאפליקציה שלנו חיונית למקרים בהם המשתמשות חשות ברגע נתון
            סיכון ממשי. האפליקציה נתמכת במערכת האנדרואיד וה- iso .
          </Text>
        </View>
        <Text style={styles.headerContainer}>המקורות</Text>
        <View style={{ backgroundColor: "white" }}>
          <Text style={{ color: "green",marginHorizontal: 5,fontSize: 22 }}>
            משרד העבודה והרווחה{"\n"}
              עמותת נעמ"ת{"\n"}
             עמותת ויצו{"\n"}
             כל זכות
          </Text>
        </View>
        <Text style={styles.headerContainer}>מי אנחנו?</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "yellow",
          }}
        >
          <View style={{ flexDirection: "column", margin: 5 }}>
            <Avatar.Image
              size={80}
              source={require("/Repos/BCare/client/assets/Stave.png")}
              style={styles.imageAbout}
            />
            <Text>סתיו יעקובי Stave@gmail.com</Text>
          </View>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Avatar.Image
              size={80}
              source={require("/Repos/BCare/client/assets/Or.png")}
              style={styles.imageAbout}
            />
            <Text>אור עמר Orama@gmail.com</Text>
          </View>
        </View>
        <EmergencyButton />
        <ReportButton />
        <Button
          icon="pan_tool"
          mode="contained"
          onPress={() => {
            navigation.navigate("HomePage");
          }}
          style={{ backgroundColor: "blue" }}
        >
          חזרה למסך הבית
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  warnings: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
    elevation: 1,
    fontWeight: "bold",
  },
  headerContainer: {
    backgroundColor: "#8c6cce",
    color: "yellow",
    fontSize: 35,
    textAlign: "center",
    marginHorizontal: 20,
    elevation: 1,
  },

  imageAbout: {
    justifyContent: "center",
    left: 50,
  },
});
