import { Tab, Tabs } from "@mui/material";
import CustomPaper from "../../General/Reusables/CustomPaper";
import { useState } from "react";

const Misdar = () => {
    enum states {
        nearMisdar,
        nextMisdars,
        scheduledMisdars
    };
    const [tabState, setTabState] = useState(states.nearMisdar);

    return (
        <CustomPaper sx={{height: "50%", paddingTop: 1.5}}>
            <Tabs value={tabState} sx={{paddingBottom: 1.5}}>
                <Tab value={states.nearMisdar} label="מסדר קרוב" onClick={() => setTabState(states.nearMisdar)}/>
                <Tab value={states.nextMisdars} label="מסדרים עתידיים" onClick={() => setTabState(states.nextMisdars)} />
                <Tab value={states.scheduledMisdars} label="מסדרים מתוזמנים" onClick={() => setTabState(states.scheduledMisdars)}/>
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