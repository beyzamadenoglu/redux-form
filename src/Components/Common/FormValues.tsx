import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

interface Data {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
    schoolName: string;
    major: string;
    language: string;
    companyName: string;
    position: string;
    year: string;
    resume: any;
}

interface Props {
    data: Data;
}

const MyTable: React.FC<Props> = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="my table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>School Name</TableCell>
                        <TableCell>Major</TableCell>
                        <TableCell>Language</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Resume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{data.firstName || "No Data"}</TableCell>
                        <TableCell>{data.lastName || "No Data"}</TableCell>
                        <TableCell>{data.age || "No Data"}</TableCell>
                        <TableCell>{data.gender || "No Data"}</TableCell>
                        <TableCell>{data.schoolName || "No Data"}</TableCell>
                        <TableCell>{data.major || "No Data"}</TableCell>
                        <TableCell>{data.language || "No Data"}</TableCell>
                        <TableCell>{data.companyName || "No Data"}</TableCell>
                        <TableCell>{data.position || "No Data"}</TableCell>
                        <TableCell>{data.year || "No Data"}</TableCell>
                        <TableCell>{data.resume ? "Resume available" : "No Resume"}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyTable;
