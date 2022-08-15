import {medium_black, medium_green, medium_grey, strong_grey} from "../constants/Colors";
import StoreImage from "../img/store_front.jpg";
import {
    Box, Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem, Paper, Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";

export default function () {

    const custom_sx = {py: 1.7, backgroundColor: medium_green}
    const styles = {
        paperContainer: {
            backgroundImage: 'url(' + StoreImage + ')',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }
    }

    return (
        <Box sx={{
            minHeight: "700px",
            display: "flex",
            flexDirection: "column",
            pt: "30px",
            pb: "40px",
            pl: "100px",
            pr: "100px"
        }}>
            <Stack
                direction={'column'}
                spacing={2.5}>
                <Typography
                    align={"center"}
                    variant={"h5"}>
                    Configura la marca de tu negocio
                </Typography>
                <Typography
                    color={strong_grey}
                    variant={"h6"}>
                    Elije la imagen que verán tus clientes y que identifique claramente a tu marca
                </Typography>
                <Typography
                    variant={"body1"}
                    color={medium_grey}>
                    No te preocupes, puedes modificarla después si lo deseas.
                </Typography>
                <Paper
                    style={styles.paperContainer}
                    sx={{height:"50vw", marginTop:2}}
                    elevation={12}
                >
                </Paper>
                <Button
                    fullWidth={true}
                    variant={"contained"}
                    sx={{marginTop:2, backgroundColor:medium_black}}
                >
                    Cambiar portada
                </Button>
                <Button
                    sx={{py: 1.5}}
                    variant={"contained"}
                >Siguiente</Button>
            </Stack>
        </Box>
    )
}
