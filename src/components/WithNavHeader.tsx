import {Box, Button, IconButton, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useEffect, useState} from "react";

interface props{
    userAuthenticated: boolean
}

export default function ({userAuthenticated}:props){

    let loginButton = <Button sx={{justifyContent:"flex-end", color:"#000000", textTransform:"capitalize" }} >Iniciar Sesión</Button>
    let logoutButton = <Button sx={{justifyContent:"flex-end", color:"#000000", textTransform:"capitalize" }} >Cerrar Sesión</Button>

    const [activeButton, setActiveButton] = useState(loginButton);

    useEffect(() => {
        return () => {
            if (userAuthenticated){
                setActiveButton(logoutButton)
            }else {
                setActiveButton(loginButton)
            }
        }
    })

    return(
        <Box
            component={'header'}
            position={"fixed"}
            width={1}
            sx={{display:"flex", flexDirection:"row", mb:"auto", pl:8, pr:14, mr:10, py:2, backgroundColor:"#000000"}}
        >
            <Box
                sx={{display:"flex", flexDirection:"row"}}
                mr={"auto"}
            >
                <Typography variant={"h5"} display="inline" color={"#ffffff"} >Tongue </Typography>
                <Typography variant={"h5"} color={"#6ac53c"} display="inline" >&nbsp;for Merchants</Typography>
            </Box>
            {activeButton}
            <IconButton sx={{justifyContent:"flex-end", color:"#ffffff" }} >
                <ArrowBackIcon/>
            </IconButton>
            <Typography>111111111111</Typography>
        </Box>
    )

}