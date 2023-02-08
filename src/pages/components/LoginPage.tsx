import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";


const LoginPage = () => {
    const [islogin , setLogin  ] = useState(false)
    //TODO: add use effect to recognize login
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
        //TODO: style css the login
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