import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import {Stack} from "@mui/material";


const LoginPage = () => {
    const [islogin , setLogin  ] = useState(false)

    function getUrl() {
        const url = "https://www.google.com";
        axios.get(url).then((res) => {
            console.log(res.status);
            if (res.status == 201){
                setLogin(true);
            }
        });
    }


    return (

        <Box
             sx={{
                 p: 10,
             }}
        >
            <Stack>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" type="password" variant="standard" />
                <Button onClick={getUrl}> Login </Button>
            </Stack>
        </Box>


    );
};

export default LoginPage;