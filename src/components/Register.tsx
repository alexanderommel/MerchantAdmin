import {Autocomplete, Box, Button, Stack, TextField, Typography, Paper} from "@mui/material";

import BackgroundImage from '../img/fondo.jpg'

export default function(){

    const addressOptions = ["Quito","Guayaquil"]
    const styles = {
        paperContainer:{
            backgroundImage: 'url('+ BackgroundImage +')',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }
    }

    return(
        <Paper
            style={styles.paperContainer}
            elevation={2}
            sx={{ minHeight:"700px", display:"flex", flexDirection:"row", pl:"50px", pr:"150px"}}
        >
            <Typography
                variant={"h4"}
                sx={{
                    my:"auto",
                    pb:"300px"
            }}
                minWidth={0}
                maxWidth={"sm"} >¡Digitaliza tu negocio con Tongue y obten clientes con nuestras apps móviles de Dandelion!</Typography>
            <Box
                sx={{mb:"auto", py:7, px:5, backgroundColor:"#ffffff", ml:"auto", justifyContent:"flex-end"}}
                width={"450px"}
                minWidth={"350px"}
            >
                <Stack
                    direction={'column'}
                    spacing={2.5}
                >
                    <Typography variant={"h4"} >Registro</Typography>
                    <TextField variant={"filled"} placeholder={"Nombre del restaurante"} />
                    <TextField variant={"filled"} placeholder={"Nombre del propietario"} />
                    <TextField variant={"filled"} placeholder={"Número de teléfono"}/>
                    <Autocomplete
                        fullWidth={true}
                        renderInput={(params) =>
                            <TextField fullWidth={true} variant={"filled"} placeholder={"Dirección del restaurante"} />}
                        options={addressOptions}/>
                    <TextField variant={"filled"} placeholder={"Correo electrónico"}/>
                    <Button
                        variant={"contained"}
                        fullWidth={true}
                        sx={{py:1.7,backgroundColor:"#000000", mb:1}}
                    >Enviar</Button>
                </Stack>
            </Box>
        </Paper>
    )

}