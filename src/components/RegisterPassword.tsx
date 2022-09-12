import {Button, Container, TextField, Typography} from "@mui/material";
import {AuthenticationApi, MerchantRegistrationForm} from "../api/AuthenticationApi";
import React, {useEffect, useState} from "react";

interface props{
    form: MerchantRegistrationForm
    onMerchantRegisteredCallback: any
}

export default function ({form,onMerchantRegisteredCallback}:props){

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const createAccount = () => {
        var registrationForm = {
            name: form.name,
            email: form.email,
            phoneNumber: form.phoneNumber,
            storeName: form.storeName,
            address: form.address,
            latitude: form.latitude,
            longitude: form.longitude,
            ruc: form.ruc,
            password: password
        }
        const request = AuthenticationApi.register(registrationForm)
        request.then( (response) => {
            if (response.success){
                console.log("Cuenta creada exitosamente")
                onMerchantRegisteredCallback()
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
            <Typography variant={"h5"} mb={1} >Registro de cuenta de negociante</Typography>
            <Typography variant={"body2"} mb={4} >Elije una contraseña con la que podrás iniciar sesión en el Administrador de Uber Eats</Typography>
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
                        createAccount()
                    }}
            >Siguiente</Button>
        </Container>
    )
}