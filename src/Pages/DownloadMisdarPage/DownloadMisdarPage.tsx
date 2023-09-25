import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography, styled } from "@mui/material"
import CustomPaper from "../../General/Reusables/CustomPaper"
import mData from "./MOCK_DATA.json"
import { useState } from "react";

const DownloadMisdarPage = () => {
    const [visisbleRows, setVisibleRows] = useState(5);
    const [pageIndex, setPageIndex] = useState(0);
    const CustomTableCell = styled(TableCell)({textAlign: "center"});
    const HeaderTableCell = styled(CustomTableCell)({fontWeight: "bold", fontSize: "1rem"});
    return (
        <CustomPaper sx={{height: "100%"}}>
            <Typography>עמוד בו יהיה אפשר להוריד מסדר בודד בתאריך מסוים, או טווח מסוים של מסדרים שירדו בקובץ אקסל.</Typography>
            <Typography>כנראה גם שנרצה להציג כאן את המסדרים האחרונים? בכל מקרה בואו ננסה להציג את הטבלה</Typography>

            <TableContainer sx={{borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
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
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                                count={mData.length}
                                labelRowsPerPage= "שורות לעמוד:"
                                rowsPerPageOptions={[5, 25, 50]}
                                labelDisplayedRows={({ from, to, count }) =>
                                `${from}-${to} מתוך ${count !== -1 ? count : `${to}`}`}
                                onPageChange={(_, page) => setPageIndex(page)} 
                                page={pageIndex} 
                                rowsPerPage={visisbleRows} 
                                onRowsPerPageChange={(e) => setVisibleRows(parseInt(e.target.value))} 
                            />
        </CustomPaper>
    );
};

export default DownloadMisdarPage;