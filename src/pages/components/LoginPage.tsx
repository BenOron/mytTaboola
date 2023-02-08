import React, {useState, useEffect, useContext} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import { UserContext } from "../../UserContext";
import CircularProgress from '@mui/material/CircularProgress';


const LoginPage = (props) => {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isClicked, setClicked] = useState(false);

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
        setClicked(true);
        const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/login";
        axios.post(url, formUser).then((res) => {
            console.log(res.status);
            if (res.status == 200){
                setClicked(false);
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
                { !isClicked && <TextField id="email" name={'username'} onChange={(e) => {setEmail(e.target.value)}} label="Email" variant="standard"/>}
                { !isClicked && <TextField id="password" label="Password" onChange={(e) => {setPass(e.target.value)}} name={'pass'} type="password" variant="standard" />}
                { !isClicked && <Button onClick={getUrl}> Login </Button>}

                {isClicked && <CircularProgress/>}
            </Stack>
        </Box>


    );
};

export default LoginPage;