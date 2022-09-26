import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import StoreCard from "./StoreCard";
import Catalogue from "./Catalogue";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import CreateProduct from "./CreateProduct";
import ProductModifiers from "./ProductModifiers";
import AddModifier from "./AddModifier";

export default function (){

    const catalogue = (Catalogue())
    const create_product = (CreateProduct())
    const product_modifiers = (ProductModifiers())
    const add_modifiers = (AddModifier())
    const drawerWidth = 240

    return(
        <Box
            sx={{display:"flex"}}>
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
                <Divider  />
                <List sx={{mt:2}}>
                    {['Administración'].map((text, index) => (
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
            <Box display={"flex"} flexDirection={"column"}  sx={{mt:12, flexGrow:1}}>
                <StoreCard/>
                <Divider sx={{mt:1.5}} />
                <Box
                    component="main"
                    sx={{  bgcolor: 'background.default', p: 4 }}
                >
                    {product_modifiers}
                </Box>
            </Box>
        </Box>
    )
}