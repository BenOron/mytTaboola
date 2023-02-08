import * as React from 'react';
import Box from '@mui/material/Box';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";


export default function Settings() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/> } label={"Show Title Recommendation"}/>
                <FormControlLabel control={<Switch defaultChecked/> } label={"Show Image Recommendation"}/>
                <FormControlLabel control={<Switch defaultChecked/> } label={"Show Floating Statistics"}/>
            </FormGroup>
        </Box>
    );
}