import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";

import { Button, TextInput } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function infoPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerContainer}>זכויות ומידע משפטי</Text>
        <Text style={styles.warnings}>
          המידע באפליקציה נאסף ממקורות המפורטים מטה השימוש במידע באחריותך בלבד
        </Text>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>האם את חשופה לאלימות במשפחה? </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            • נפגעות אלימות במשפחה יכולות לקבל סיוע משפטי ממשרד המשפטים בהליכים
            של צו הגנה וצווים למניעת הטרדה ולהרחקה. • ניתן להגיש תלונה למשטרה. •
            ניתן לבקש מבית המשפט לענייני משפחה או בית דין דתי צו הגנה למניעת
            אלימות במשפחה וכן צו למניעת הטרדה מאיימת, שהפרתם בידי בן הזוג עשויה
            להביא למעצרו והגשת כתב אישום. • בדקי את זכאותך למקלט לנשים נפגעות
            אלימות. • המקלט נועד לספק מענה מיידי והגנה פיזית ובטחון נפשי לך
            ולילדיך, באמצעות ליווי, תמיכה, טיפול סוציאלי, ייעוץ וייצוג משפטי. •
            חלק מהמקלטים מותאמים תרבותית לאוכלוסיות מיוחדות, למשל מקלטים לנשים
            דתיות וחרדיות נפגעות אלימות במשפחה.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>
            מה קורה אם את זכאית למקלט אבל לא יכולה לשהות בו (מסיבות כאלה
            ואחרות)?
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            ייתכן ואת זכאית לסיוע בשכר דירה.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>האם נזקקת לטיפול רפואי ?</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            במצבים מסוימים, נפגעות אלימות עשויים להגיע לחדרי המיון בבית החולים
            לצורך טיפול רפואי. במקרים של אלימות במשפחה ונפגעות אלימות מינית,
            פטורות מתשלום בפנייה לחדר מיון.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>מהם התנאים למועמדות לקבלת סיוע ?</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            הסיוע ניתן באופן חד פעמי, כאשר ישנם שני תנאים מחייבים למועמדות
            לקבלתו: • על הנפגעת לעזוב את הגורם הפוגע ואת הבית. • אישור מגורם
            הרווחה המטפל כי לפונה קיימת תוכנית טיפול בתחום אלימות במשפחה.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>
            האם את מעוניינת או נאלצת להיעדר מעבודתך ?
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            על פי חוק עבודת נשים, תשי"ד-1954, נשים אשר נמצאות במקלט לנשים נפגעות
            אלימות (באישור גורמי הרווחה), זכאיות להיעדר מעבודתן בתקופת שהותן
            במקלט, אם יש לך ותק של חצי שנה לפחות באותו מקום עבודה או אצל אותו
            המעסיק , את זכאית לצאת לחופשה ללא תשלום למשך עד 6 חודשים במהלך השנה
            הראשונה לשהות. חשוב לדעת שאסור לפטרך בזמן שהייתך במקלט! חוק עבודת
            נשים תשי"ד-1954 קובע כי במהלך התקופה בה רשאית עובדת השוהה במקלט
            לנשים נפגעות אלימות להיעדר מעבודתה, ובמהלך 90 ימים לאחר סיום תקופת
            ההיעדרות לא ניתן לפטר אותה ממשרתה ולא ניתן לתת לה הודעה מוקדמת על
            פיטורים. • מעסיק שרוצה לפטר עובדת השוהה במקלט חייב להגיש בקשה להיתר
            לפיטורים או פגיעה בהיקף משרה לפי חוק עבודת נשים. • בהתאם לסעיף 13 ד'
            לחוק עבודת נשים , צד שאינו מסכים עם החלטת הממונה על חוק עבודת נשים
            רשאי לערער על ההחלטה לבית הדין האזורי לעבודה בתוך 45 ימים מיום
            שהגיעה החלטת הממונה לידיעתו. • אם את בוחרת לעזוב את עבודתך עקב
            השהייה במקלט, ויש לך ותק של שנה לפחות באותו מקום עבודה, את זכאית
            לפיצויי פיטורים. • אם את עצמאית והפסקת לעבוד, באפשרותך לסגור את העסק
            ולמשוך חלק מהסכומים שחסכת בחיסכון הפסיוני ללא תשלום מס.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>האם את מקבלת הבטחת הכנסה ?</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            אם לא, ייתכן שתהיי זכאית לגמלת הבטחת הכנסה, נשים תושבות ישראל
            הצפויות לשהות במקלט לנפגעות אלימות מעל 30 ימים רשאיות להגיש בקשה
            לבדיקת זכאותן להבטחת הכנסה מביטוח לאומי.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>מענק לימודים לילדי המשפחה.</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            נשים השוהות במקלט לנפגעות אלימות זכאיות לקבל מענק לימודים מטעם
            הביטוח הלאומי אשר מסייע בהשתתפות הוצאות הלימודים של ילדי המשפחה.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>
            מענק הסתגלות לנשים ששהו במקלט לנפגעות אלימות: מי זכאית לקבלת מענק?
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            ע"פ חוק שירותי רווחה( זכויות נשים ששהו במקלט לנשים מוכות) תש"ג
            ג-2012 נשים אשר שהו במקלט לנפגעות אלימות ועומדות בתנאים המוגדרים
            זכאיות לקבלת מענק הסתגלות לאחר עזיבת המקלט. המענק יינתן לנשים אשר
            שהו במקלט לנפגעות אלימות במשך 60 יום לפחות ולנשים אשר שהו בדירת מעבר
            למשך חצי שנה לפחות ובתנאי שיעמדו בתנאים הבאים: • לאחר עזיבתה האישה
            לא שבה לחיות עם הפוגע. • עברו חמש שנים מאז שהאישה הגישה בקשה קודמת
            המבוססת על חוק שירותי רווחה. כיצד מתבצעת הפנייה לקבלת המענק? להגשת
            בקשה לקבלת מענק עלייך לפנות למחלקה לשירותים חברתיים ( של משרד
            הרווחה). אם תאושר בקשתך, המענק ישולם לאחר עזיבתך מהמקלט ועד 60 יום
            מהגשת הבקשה. אם בקשתך נדחתה, באפשרותך להגיש ערר לבית הדין האזורי
            לעבודה. את הערר יש להגיש תוך 12 חודשים מיום שעזבת את המקלט, או עד
            חצי שנה מהיום שבו נדחתה בקשתך לקבלת המענק.
          </Text>
        </View>
        <View style={{ backgroundColor: "red" }}>
          <Text style={styles.headline}>חוק חובת היידוע</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            ליידע אדם על אפשרותו לפנות לתחנת משטרה, למחלקה לשירותים חברתיים או
            למרכז לטיפול ולמניעת אלימות במשפחה, אם מתעורר בהם חשד סביר כי נעברה
            באדם לאחרונה עברת אלימות, לרבות עברת מין, על ידי בן זוגו או מי שהיה
            בן זוגו בעבר. מדובר בחשד המתעורר במהלך מפגש ייעוץ או טיפול, בין
            במסגרת פורמאלית (כמו באספת הורים) ובין במסגרת בלתי-פורמאלית (כמו
            במפגש מקרי ברחוב)
          </Text>
        </View>
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
      <EmergencyButton />
      <ReportButton />
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
  headline: {
    backgroundColor: "#8c6cce",
    color: "yellow",
    fontSize: 24,
    textAlign: "left",
    marginHorizontal: 5,
    elevation: 1,
  },
});
