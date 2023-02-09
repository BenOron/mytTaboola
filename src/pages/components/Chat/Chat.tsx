import React, {useContext, useEffect, useState} from "react";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import axios from 'axios';
import Box from "@mui/material/Box";


const Chat = () => {
    const url = "https://sre-hackathon-ads-backend-srv-ayfqltafia-ey.a.run.app/chat"
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        // setMessages(arr=> [...arr, {
        //     message: "Test",
        //     isRemote: false
        // }])
        console.log('Messages',messages);

    }, [])
    function handleNewMessage(msgObj) {
        setMessages(arr=> [...arr, msgObj])
        axios.post(url, {message: msgObj.message}).then((res) => {
            setTimeout(() => {
                setMessages(arr=> [...arr, {message: res.data.response, isRemote: true}])
            }, 1000)
        })
    }

    const BuildMessages = () => {
        return (<>{ messages?.map((message, idx) => (
           <> { message.isRemote == true ? <MessageLeft message={message.message}/> : <MessageRight message={message.message} />}</>
        ))}</>)
    }
    return (

            <Paper sx={{
                width: "100vw",
                height: "70vh",
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                boxShadow: 0
            }}>
                <Box sx={{
                    overflowY:"auto",
                    width: "80%",
                    height: "100%",
                    scrollbarWidth: 'thin',
                    '&::-webkit-scrollbar': {
                        width: '0.1em',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: "#f1f1f1",
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555'
                    }
                }}>
                <BuildMessages />
                </Box>
                <TextInput setMsg={handleNewMessage} />


            </Paper>
    );
}


export default Chat