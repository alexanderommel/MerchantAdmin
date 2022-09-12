import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

interface props{
    onLoginButtonClickedCallback: any
}

export default function ({onLoginButtonClickedCallback}:props){

    const [email, setEmail] = useState("");
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onLoginButtonClicked = () => {
        if (email===""){
            console.log("Ingrese su email para continuar!")
        }else{
            onLoginButtonClickedCallback(email)
        }
    }

    return(
        <Container
            sx={{my:"auto", mt:12}}
            maxWidth={"sm"}>
            <Typography
                variant={"h2"}
                textAlign={"center"}
                mb={5}
                fontWeight={"bold"}
            >
                <Typography variant={"h4"}  display="inline" >Tongue</Typography>
                <Typography variant={"h4"} display="inline" color={"#529930"} > for Merchants</Typography>
            </Typography>
            <Typography variant={"h5"} mb={1} >Inicio de Sesión</Typography>
            <Typography variant={"body2"} mb={4} >Usa tu dirección de correo electrónico y tu contraseña para iniciar sesión en el Administrador de Uber Eats</Typography>
            <Typography variant={"subtitle1"} mb={1} color={"#707070"} >Correo electrónico</Typography>
            <TextField variant={"outlined"} fullWidth={true} placeholder={"Ingrese su email"}
                       sx={{mb:2}}
                       value={email}
                       onChange={handleEmailChange}
            ></TextField>
            <Button variant={"contained"} fullWidth={true}
                    sx={{py:1.5,backgroundColor:"#529930", mb:1}}
                    onClick={() => {
                        onLoginButtonClicked()
                    }}
            >Siguiente</Button>
            <Button variant={"contained"} fullWidth={true} sx={{py:1.5}} >Continuar con Google</Button>
        </Container>
    )

}