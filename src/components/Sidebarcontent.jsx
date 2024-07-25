import { Box, Button, styled, List, ListItem,} from "@mui/material";
import { CreateOutlined} from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/Sidebar.config";
import ComposeMail from "./Composemail";
import { useState } from "react";

const Composebutton = styled(Button)({
    background: '#c3e3fb',
    color: '#000000', 
    padding: '16px 20px',
    borderRadius: 20,
    minWidth: 140,
    textTransform: 'none',
    fontWeight : 500,
    '& > svg' : {
        marginRight: 15,
        fontSize: 25,
    }
})

const Contain = styled(Box)({
    padding: 8,
    '& > ul' : {
        padding: '10px 0 0 5px',
        fontWeight: 500,
        fontSize: 14,
        Cursor: 'pointer',
    },
    '& > ul > li > svg': {
        marginRight: 20,
        fontSize: 18,
    }
})

const Sidebarcontent = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const onComposeClick = () => {
        setOpenDialog(true);
    }

    return(
        <Contain>
            <Composebutton onClick={() => onComposeClick()}>
                <CreateOutlined /> Compose
            </Composebutton>
            <List>
                {
                    SIDEBAR_DATA.map((data, index) => (
                        <ListItem key={index}>
                            <data.icon />{data.title}
                        </ListItem>
                    ))
                } 
            </List>
            <ComposeMail openDialog = {openDialog}  setOpenDialog = {setOpenDialog}/>
        </Contain>
    );
};

export default Sidebarcontent;