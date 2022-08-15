import {Box, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";

export default function (){

    return(
        <Box component={"div"} display={"flex"} flexDirection={"row"} sx={{mx:4, my:1.5}} >
            <Box
                component={"img"}
                sx={{height:72,width:86}}
                alt={"Store Image"}
                src={"https://cdn.visafranchise.com/wp-content/uploads/2021/04/26143145/kfc-faxafeni.jpg"}
            />
            <Box display={"flex"} flexDirection={"column"} sx={{mx:2}} >
                <Typography variant={"h6"} >Restaurante Sushi 6 de Diciembre</Typography>
                <Typography variant={"subtitle1"} >Dirección: Quito, Avenida 6 de diciembre y avellada</Typography>
            </Box>
        </Box>
    )

}