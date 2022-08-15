import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

export default function (){
    return(
        <Box>
            <Typography variant={"h4"} >Catálogo</Typography>
            <Typography variant={"h6"} pt={1.5} >
                ¡Para que los clientes vean los productos que ofreces cuando tu negocio esta activo, asegurate de añadirlos al menú!
            </Typography>
            <Typography variant={"body1"} pt={1.5}>
                La sección del catálogo es un panel de administración de la oferta que tiene tu negocio, el menú es lo que tus clientes pueden ver
            </Typography>
            <List sx={{mt:4}}>
                {['Categorías',"Productos"].map((text, index) => (
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
        </Box>
    )
}