import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


export const TextInput = ({setMsg}) => {

    const [txt, setTxt] = useState('')

    function onClick(){
        setMsg({message: txt, isRemote: false})
        setTxt('')
    }

    return (
        <>
            <form style={{
                display: "flex",
                justifyContent: "center",
                width: "95%"
            }}  noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="What do you want to ask?"
                    sx={{
                        width: "100%"
                    }}
                    value={txt}
                    onKeyDown={(event) => {
                        if (event.key == 'Enter') {
                            event.stopPropagation();
                            event.preventDefault();
                            onClick();
                        }
                    }}
                    onChange={(e)=>{setTxt(e.target.value)}}
                    //margin="normal"
                />
                <Button variant="contained" color="primary" onClick={onClick}>
                    <SendIcon />
                </Button>
            </form>
        </>
    )
}



