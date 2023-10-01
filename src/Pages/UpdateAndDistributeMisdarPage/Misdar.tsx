import { Tab, Tabs } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";

const Misdar = () => {
    enum states {
        nearMisdar,
        nextMisdars,
        scheduledMisdars
    }
    return (
        <CustomPaper sx={{height: "100%"}}>
            <Tabs value={states.nearMisdar}>
                <Tab value={states.nearMisdar} label="מסדר קרוב" />
                <Tab value={states.nextMisdars} label="מסדרים עתידיים" />
                <Tab value={states.scheduledMisdars} label="מסדרים מתוזמנים" />
            </Tabs>
            נציג כאן אם נקבע מסדר, בנוסף נציג אם יש הערות (למשל: מסדר ניקיון, מסדר עם הרמח, וכו') 
            בנוסף תהיה האופציה לראות: את המסדרים הקרובים שנקבעו עם מידע ידני, תזמוני מסדרים אוטומטיים. לכל מסדר שנקבע ידנית מתוזמן אוטומטי תהיה אופציה למחוק את המסדר. במידה ואנחנו נמחק מסדרים מתוזמנים זה ימחק את כל המסדרים בכל תאריך עתידי.

            במידה ונמחק מסדר - אז במידה וזה מסדר קרוב או מסדר שנשלחה לגביו הודעה- נבקש שתישלח הודעת ביטול (ואולי גם סיבת ביטול?) בפופ אפ
            במידה ונמחק מסדר עם הערות - הוא עדיין יהיה חלק מהטבלת אקסל \ הטבלה המוצגת באתר
            במידה ונמחק מסדר מתוזמן - לא תופיע שום הודעה והתזמון יימחק ללא זכר.

        </CustomPaper>
    );
};

export default Misdar;