import React, {useState, useEffect, useContext} from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomTable from "@pages/components/CustomTable";
import Chat from "@pages/components/Chat";
import { UserContext } from "../../UserContext";
import Graph from "@pages/components/Graph";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ChatIcon from '@mui/icons-material/Chat';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const { user } = useContext(UserContext);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // @ts-ignore
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<AutoGraphIcon />}  label="Current Campaign" {...a11yProps(0)} />
                    <Tab icon={<ChatIcon />}  label="Support" {...a11yProps(1)} />
                    {/*<Tab label="Item Three" {...a11yProps(2)} />*/}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <> <Graph/>
              <CustomTable/> </>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Chat/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}