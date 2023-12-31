import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, styled } from "@mui/material"
import CustomPaper from "../../General/Reusables/CustomPaper"
import mData from "./MOCK_DATA.json"
import { useState } from "react";

const MisdarTablePage = () => {
    const [visisbleRows, setVisibleRows] = useState(20);
    const [pageIndex, setPageIndex] = useState(0);
    const CustomTableCell = styled(TableCell)({textAlign: "center"});
    const HeaderTableCell = styled(CustomTableCell)({fontWeight: "bold", fontSize: "1rem"});
    return (
        <Stack gap={1.5} height="100%">
            <CustomPaper sx={{height: "15%"}}>
            עמוד של צפייה והורדת מסדרים? מניח שאנחנו נרצה תמיד לראות את המסדר האחרון אבל נוכל להזיז בין תאריכים + כפתור ההורדה יפתח מודל שיתן לנו להוקיד את המסדרים בטווח שנרצה (דיפולט יהיה כמובן המסדר האחרון בלבד)

            <Typography fontWeight="bold">זה גם יהיה נחמד אם יהיה איזשהו card שקשור להורדת המסדר (כלומר להפריד בין לוגיקת ההורדה ללוגיקת הטבלה)</Typography>
            </CustomPaper>

            <CustomPaper sx={{height: "85%"}}>
            <TableContainer sx={{borderTopLeftRadius: 10, borderTopRightRadius: 10, height: "94%"}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <HeaderTableCell>ID</HeaderTableCell>
                            <HeaderTableCell>מחלקה</HeaderTableCell>
                            <HeaderTableCell>ענף</HeaderTableCell>
                            <HeaderTableCell>מדור</HeaderTableCell>
                            <HeaderTableCell>מספר אישי</HeaderTableCell>
                            <HeaderTableCell>דרגה</HeaderTableCell>
                            <HeaderTableCell>שם מלא</HeaderTableCell>
                            <HeaderTableCell>התייצבות</HeaderTableCell>
                            <HeaderTableCell>הופעה</HeaderTableCell>
                            <HeaderTableCell>הערות נוספות</HeaderTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {mData.slice(pageIndex * visisbleRows, (pageIndex + 1) * visisbleRows).map(item => {
                            return (
                                <TableRow hover key={item.id}>
                                    <CustomTableCell>{item.id}</CustomTableCell>
                                    <CustomTableCell>{item.mahlaka}</CustomTableCell>
                                    <CustomTableCell>{item.class}</CustomTableCell>
                                    <CustomTableCell>{item.team}</CustomTableCell>
                                    <CustomTableCell>{item.pNum}</CustomTableCell>
                                    <CustomTableCell>{item.level}</CustomTableCell>
                                    <CustomTableCell>{item.fName}</CustomTableCell>
                                    <CustomTableCell>{item.appearance}</CustomTableCell>
                                    <CustomTableCell>{item.warnings}</CustomTableCell>
                                    <CustomTableCell>{item.comments}</CustomTableCell>
                            </TableRow>
                            )
                        })}

                        <TableRow>
                        <TablePagination
                            count={mData.length}
                            labelRowsPerPage= "שורות לעמוד:"
                            rowsPerPageOptions={[20, -1]}
                            labelDisplayedRows={({ from, to, count }) =>
                            `${from}-${to} מתוך ${count !== -1 ? count : `${to}`}`}
                            onPageChange={(_, page) => setPageIndex(page)} 
                            page={pageIndex} 
                            rowsPerPage={visisbleRows} 
                            onRowsPerPageChange={(e) => setVisibleRows(parseInt(e.target.value))} 
                        />
                        </TableRow>
                    </TableBody>
                </Table>
                
            </TableContainer>
           
        </CustomPaper>
        </Stack>
    );
};

export default MisdarTablePage;