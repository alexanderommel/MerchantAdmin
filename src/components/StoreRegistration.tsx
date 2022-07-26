import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar}
    from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import StoreDetailsRegistration from "./StoreDetailsRegistration";
import StoreBrandRegistration from "./StoreBrandRegistration";
import LoginPassword from "./LoginPassword";
import React, {useState} from "react";

interface props{
    onStoreRegistrationSuccessfulCallback: any
}

export default function ({onStoreRegistrationSuccessfulCallback}: props){

    const drawerWidth = 240;

    const onSaveButtonClickedCallback = () => {
        onStoreRegistrationSuccessfulCallback()
    }

    const onNextButtonClickedCallback = () => {
        let page_ = <StoreBrandRegistration onSaveButtonClickedCallback={onSaveButtonClickedCallback} />
        setPage(page_)
    }

    let initialPage= <StoreDetailsRegistration onNextButtonClickedCallback={onNextButtonClickedCallback} />

    const [page, setPage] = useState(initialPage);

    return(
        <Box
            sx={{display:"flex",mt:7}}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 1,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        zIndex:'-1'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List sx={{mt:2}}>
                    {['Pasos'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['1. Detalles del restaurante','2. Marca del restaurante'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {page}
            </Box>
        </Box>
    )

}