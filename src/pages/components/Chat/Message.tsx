import React from "react";
import { styled } from "@mui/material/styles";
import Avatar, {AvatarProps} from "@mui/material/Avatar";
import { deepOrange, blue } from "@mui/material/colors";


export const MessageLeft = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    const photoURL = props.photoURL ? props.photoURL : "dummy.js";
    const displayName = props.displayName ? props.displayName : "Adam Singolda";

    return (
        <>
            <div style={{display: "flex"}}>
                <Avatar
                    alt={displayName}
                    style={{
                        backgroundColor: deepOrange[500],
                    }}
                    src={photoURL}
                ></Avatar>
                <div>
                    <div style={{marginLeft: "20px"}}>{displayName}</div>
                    <div style={{
                        position: "relative",
                        marginLeft: "20px",
                        marginBottom: "10px",
                        padding: "10px",
                        backgroundColor: "#A8DDFD",
                        width: "60%",
                        //height: "50px",
                        textAlign: "left",
                        font: "400 .9em 'Open Sans', sans-serif",
                        border: "1px solid #97C6E3",
                        borderRadius: "10px",
                    }}>
                        <div>
                            <p style={{
                                padding: 0,
                                margin: 0
                            }}>{message}</p>
                        </div>
                        <div style={{
                            position: "absolute",
                            fontSize: ".85em",
                            fontWeight: "300",
                            marginTop: "10px",
                            bottom: "-3px",
                            right: "5px"
                        }}>{timestamp}</div>
                    </div>
                </div>
            </div>
        </>
    );
};


export const MessageRight = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    const displayName = props.displayName ? props.displayName : "Me";

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end"
        }}>

            <div style={{
                position: "relative",
                marginRight: "20px",
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: "#f8e896",
                width: "60%",
                //height: "50px",
                textAlign: "left",
                font: "400 .9em 'Open Sans', sans-serif",
                border: "1px solid #dfd087",
                borderRadius: "10px",
            }}>
                <p style={{
                    padding: 0,
                    margin: 0
                }}>{message}</p>
            </div>
            <Avatar
                alt={displayName}
                style={{
                    backgroundColor: blue[500],
                }}
            ></Avatar>
        </div>
    );
};
