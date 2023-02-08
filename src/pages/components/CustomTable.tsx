import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';

import axios from "axios";
import {object} from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:'rgb(0, 75, 122)',
        color: theme.palette.common.white,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow:'ellipsis'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomTable() {
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/stats"
    const [data, setData] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res?.data?.results);
            setData(res?.data?.results);
            console.log(data);
            setLoaded(true)
        });
    }, [])


    const RetrunHeader = () => {
        return (
            <TableHead>
            <TableRow>
                {
                    Object.keys(data[0]).map((headrName,idx) => {
                        return (<StyledTableCell style={{textDecoration: 'capit'}}>{headrName}</StyledTableCell>)
                    })

                }
            </TableRow>
        </TableHead>)
    }

    const BuildTable = () => {
        return (<>{ data?.length > 0 && data?.map((row, idx) => (
            <StyledTableRow key={idx}>
                { row && Object.values(row).map((item) => (
                    <StyledTableCell component="th" scope="row">
                        {item}
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        ))}</>)
    }

    return (

         <div>
             { isLoaded && <TableContainer component={Paper}>
                {data?.length > 0 &&
                <Table  aria-label="customized table">
                    <RetrunHeader/>
                    <TableBody>
                        <BuildTable/>
                    </TableBody>
                </Table>}
            </TableContainer>}
             { !isLoaded && <CircularProgress/>}
         </div>

);
}