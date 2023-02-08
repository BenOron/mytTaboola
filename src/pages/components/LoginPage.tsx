import React, {useState, useEffect, useContext} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import { UserContext } from "../../UserContext";


const LoginPage = (props) => {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    //TODO: add use effect to recognize login
    function getUrl() {
        const formUser = {
            "email": email,
            "pass": pass
        }
        const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/login";
        axios.post(url, formUser).then((res) => {
            console.log(res.status);
            if (res.status == 200){
            }
            setUser(formUser);

        }).catch((err) => {
            console.error(err);
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
                <TextField id="email" name={'username'} onChange={(e) => {setEmail(e.target.value)}} label="Email" variant="standard"/>
                <TextField id="password" label="Password" onChange={(e) => {setPass(e.target.value)}} name={'pass'} type="password" variant="standard" />
                <Button onClick={getUrl}> Login </Button>
            </Stack>
        </Box>


    );
};

export default LoginPage;