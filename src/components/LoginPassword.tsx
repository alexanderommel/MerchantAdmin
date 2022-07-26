import {Button, Container, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {AuthenticationApi, MerchantRegistrationForm} from "../api/AuthenticationApi";

interface props{
    email: string
    onLoginSuccessfulCallback: any
}

export default function ({email,onLoginSuccessfulCallback}: props){

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onLoginButtonClicked = () => {
        var credentials = {
            email: email,
            password: password
        }
        const request = AuthenticationApi.login(credentials)
        request.then( (response) => {
            if (response.success){
                console.log("Cuenta creada exitosamente")
                onLoginSuccessfulCallback(response.payload?.data)
            }
            else {
                console.log("Credenciales incorrectas")
            }
        })
    }

    return(
        <Container
            sx={{my:"auto"}}
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
            <Typography variant={"subtitle1"} mb={1} color={"#707070"} >Contraseña</Typography>
            <TextField variant={"outlined"} fullWidth={true} placeholder={"Ingrese su contraseña"}
                       sx={{mb:2}}
                       value={password}
                       onChange={handlePasswordChange}
            ></TextField>
            <Button variant={"contained"}
                    fullWidth={true}
                    sx={{py:1.5,backgroundColor:"#529930", mb:1}}
                    onClick={() => {
                        onLoginButtonClicked()
                    }}
            >Siguiente</Button>
        </Container>
    )

}