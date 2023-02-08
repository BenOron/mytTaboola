import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';


const LoginPage = () => {
    const [islogin , setLogin  ] = useState(false)

    function getUrl() {
        const url = "https://www.google.com";
        axios.get(url).then((res) => {
            console.log(res.status);
        });
    }


    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={getUrl}> Login </Button>
        </div>
    );
};

export default LoginPage;