import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView,Image } from "react-native";

import { Button } from "react-native-paper";
import EmergencyButton from "./EmergencyButton";
import ReportButton from "./ReportButton";

export default function WarningSign({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerContainer}>סימני אזהרה ודרכי התגוננות</Text>
        <Text style={styles.warnings}>
          המידע באפליקציה נאסף ממקורות המפורטים מטה השימוש במידע באחריותך בלבד
        </Text>
        <View>
          <Text style={styles.headline}>אלימות כללית</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            אלימות במשפחה לא מתבטאת תמיד בפגיעה פיזית ולכן עלולה להיות קשה
            לזיהוי. במדריך זה ריכזנו סימנים אשר מאפשרים זיהוי אלימות, גם כאשר
            האלימות מופנית נגדך. בנוסף, אספנו מספר הנחיות אשר יכולים לסייע לך
            להתגונן בעת סכנה מיידית לחייך או לשלומך הגופני והנפשי.
          </Text>
          <Text style={styles.headline}>
            אלימות במשפחה לא מתבטאת תמיד בפגיעה פיזית ולכן עלולה להיות קשה
            לזיהוי. במדריך זה ריכזנו סימנים אשר מאפשרים זיהוי אלימות, גם כאשר
            האלימות מופנית נגדך. בנוסף, אספנו מספר הנחיות אשר יכולים לסייע לך
            להתגונן בעת סכנה מיידית לחייך או לשלומך הגופני והנפשי.
            {"\n"}
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
             חשדנות רבה והתקפי חרדה.  רכושנות.{"\n"} קנאות מוגזמת (המובילה
            להתנהגות אובססיבית כגון: מעקב, שיחות טלפון חוזרות ונשנות){"\n"}
            מצבי רוח קיצוניים.{"\n"} זלזול וחוסר הערכה ( פגיעה בער העצמי שלך
            מעליב, משפיל, מקטין ומזלזל ברצונותייך){"\n"} מצבי רוח קיצוניים{" "}
            {"\n"} הפעלת שליטה.{"\n"} מול אחרים הוא מציג אישיות שונה לחלוטין.
            {"\n"} הצורך בהסתרת דברים מפניו.{"\n"} הפחדת האישה ( שימוש בחפצים,
            שבירת חפצים, פגיעה ברכוש, שימוש בכוח ובנשק).{"\n"} האשמת האישה
            באלימות כלפיה.{"\n"} הכחשת אלימות.{"\n"} בידוד האישה מהחברה
            ומהמשפחה.{"\n"} ביקורת מתמדת ואי הערכה של רגשות האישה, מחשבותיה
            והישגיה.{"\n"} התקפות מילוליות על האישה ועל אנשים אחרים.{"\n"}
            האשמת בת הזוג בכל דבר שאינו מסתדר בזוגיות ובחיים המשותפים.{"\n"}
            הכחשת התרחשות אירוע (אירוע אלים, מיני או כל אירוע חריג אחר).{"\n"}
            איומים באלימות.{"\n"} איומים בפגיעה עצמית והתאבדות.{"\n"} איומים
            בפגיעה ברמת המחיה ובמצב הכלכלי.{"\n"} שליטה על גוף האישה ודרישה
            למעשים שאינם מרגישים בנוח על ידה.{"\n"}
            {"\n"}
          </Text>
          <Text style={styles.attention}>
            סימנים ראשוניים אלו מנבאים ברוב המקרים מערכת זוגית אלימה !!!
          </Text>
        </View>
        <View>
          <Text style={styles.headline}>
            הנחיות להתגוננות במצבי סיכון מיידים!!
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            אם קיימת סכנה מיידית לחייך או לשלומך הגופני והנפשי מצד בן או בן
            משפחה אחר, ישנן דרכי התגוננות שבאפשרותך לפעול על פיהן.
          </Text>
          <Text style={styles.headline}> התרחקות מיידית מהמקום:</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            בעת סכנה מיידית, הדבר הטוב ביותר שכדאי לעשות, אם ניתן הוא להתרחק מן
            המקום במהירות האפשרית. מומלץ לתכנן מסלול בריחה מהיר ביותר מן הבית
            ולתרגל אותו.
          </Text>
          <Text style={styles.headline}> קריאה לעזרה:</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            בעת סכנה מיידית, הדבר הטוב ביותר שכדאי לעשות, אם ניתן הוא להתרחק מן
            המקום במהירות האפשרית. מומלץ לתכנן מסלול בריחה מהיר ביותר מן הבית
            ולתרגל אותו.
          </Text>
          <Text style={styles.headline}>הכנת תיק מראש:</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            למקרה שבו יעלה צורך לברוח מהבית באופן מיידי כדאי להכין מראש תיק עם
            חפצים אישיים (לך ולבני בית נוספים הנמצאים בסכנה), הכולל: • ציוד אישי
            למספר ימים {"\n"}• פרטי חשבון בנק {"\n"}• רשימת כתובות וטלפונים של
            בני משפחה, חברים ואנשים קרובים. {"\n"}• מפתחות נוספים לבית. {"\n"}•
            כסף מזומן {"\n"}• תעודת זהות, כרטיס קופת חולים ומסמכים אישיים.{" "}
            {"\n"}
          </Text>
          <Text style={styles.headline}> שיתוף אדם קרוב</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            אם הופעלה נגדך אלימות כלשהי, מומלץ לשתף אדם קרוב ולתאר בפניו את
            שארע. חשוב שיהיה לך שכן או שכנה, חבר או חברה שיהיו מודעים למצב
            ויעזרו בשעת הצורך
          </Text>
          <Text style={styles.headline}> פנייה למקום מוגן:</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            לאחר שעזבת את מקום הסכנה המיידית, יש לפנות למקום המאפשר לך שהות
            בטוחה. כדאי להיעזר במשפחה וחברים, ובכל שלב ניתן ומומלץ לפנות לקווי
            החירום (118) של משרד הרווחה, הפועלים 24 שעות ביממה, אשר יעזרו לך
            באיתור מקום בטוח. (קיימת האפשרות לגישה מהירה דרך אפליקציה זו באמצעות
            לחיצה )
          </Text>
          <Text style={styles.headline}> פנייה לגורמים מקצועיים</Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
            חשוב לפנות לגורמים המקצועיים המטפלים באלימות במשפחה, אשר יוכלו
            להעניק לך שירותי הגנה, ליווי, טיפול, ייעוץ כללי וייעוץ משפטי.
          </Text>
          <Text style={styles.attention}>
            שימי לב: עזיבה ובריחה מאדם אלים עלולה להגביר את האלימות מצדו ובחלק
            מהמקרים, לעלות בחיי אדם. אם ברצונך לעזוב, יש לעשות זאת ללא הכנה מראש
            של התוקף, מבלי ניסיון לדבר ולהסביר והכי חשוב  לעולם לא לעשות זאת
            לבד.
          </Text>
          <Text style={styles.headline}>
            אם את חיה עם בן זוג אלים, ישנן מספר פעולות שמומלץ לפעול על פיהן כדי
            לשמור על ביטחונך ובטחון ילדייך:
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
             נסי לזהות התנהגות מקדימה להתפרצות אלימה ובדקי את האפשרויות שלך
            להתרחק לפני האירוע  נסי לשחזר ולזהות התנהגויות אשר סייעו בעבר
            להפחתת הפגיעות ובדקי האם ניתן להמשיך בהן.{"\n"} הכירי את שכנייך
            ושמרי קשר עם חברים{"\n"} סכמי עם אדם קרוב  שכנה, חברה או מישהו
            ממשפחתך  על קוד מסוים אשר יאותת להם שאת נמצאת בסכנה ויאפשר להם
            לפעול לעזרתך.{"\n"} זכרי מספרי טלפון חשובים: משטרה, מגן דוד אדום,
            מוקד הרווחה, שכנים, בני משפחה וכדומה.{"\n"}
          </Text>
          <Text style={styles.headline}>
            אם את חיה בנפרד מבן זוג אלים או שבן זוגך הורחק, ישנן מספר פעולות
            שמומלץ לפעול על פיהן כדי לשמור על ביטחונך ובטחון ילדייך:
          </Text>
          <Text style={{ color: "white", marginHorizontal: 5, fontSize: 22 }}>
             החליפי מנעולים.  הוסיפי אמצעי בטיחות ככל יכולתך: סורגים, שער
            ברזל, אזעקה, מצלמות, אורות חיצוניים וכדומה. {"\n"} שתפי את השכנים
            הקרובים במצב ובקשי שיודיעו לך כשרואים את בן זוגך באזור או שיתקשרו
            למשטרה. {"\n"} הבטיחי שהמטפלות, הגננות והמורות של הילדים יודעות למי
            יש סמכות לקחת את הילדים והזהירי מפני חטיפה. {"\n"} שמרי את צו
            ההרחקה קרוב והשאירי העתק לשכנים, לחברים ולקרובים. {"\n"} הימנעי
            מלהימצא עם בן הזוג לבד גם אם הוא רגוע ומבטא רק רצון לשוחח {"\n"}
          </Text>
        </View>
        <View>
        <Image
          source={require("/Repos/BCare/client/assets/circalOfv.png")}
          style={{
            
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />

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
  attention: {
    color: "red",
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 5,
    elevation: 1,
    fontWeight: "bold",
  },
});
