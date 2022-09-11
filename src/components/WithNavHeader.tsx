import {Box, Button, IconButton, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function (){

    return(
        <Box
            component={'header'}
            position={"fixed"}
            width={1}
            sx={{display:"flex", flexDirection:"row", mb:"auto", pl:8, pr:4, mr:10, py:2, backgroundColor:"#000000"}}
        >
            <Box
                sx={{display:"flex", flexDirection:"row"}}
                mr={"auto"}
            >
                <Typography variant={"h5"} display="inline" color={"#ffffff"} >Tongue </Typography>
                <Typography variant={"h5"} color={"#6ac53c"} display="inline" >&nbsp;for Merchants</Typography>
            </Box>
            <Button sx={{justifyContent:"flex-end", color:"#ffffff", textTransform:"capitalize" }} >Iniciar Sesión</Button>
            <IconButton sx={{justifyContent:"flex-end", color:"#ffffff" }} >
                <ArrowBackIcon/>
            </IconButton>
        </Box>
    )

}