import {Autocomplete, Box, Button, Stack, TextField, Typography, Paper} from "@mui/material";

import BackgroundImage from '../img/fondo.jpg'
import React, {useState} from "react";
import {MerchantRegistrationForm} from "../api/AuthenticationApi";

interface props{
    onCreateAccountButtonClickedCallback: any
}

export default function({onCreateAccountButtonClickedCallback}:props){

    const onCreateAccountButtonClicked = () =>{
        if (storeName==="" && storeAddress===""
        && merchantName==="" && merchantEmail===""
        && merchantPhone==="" && ruc===""){
            console.log("Llene todos los datos")
        }else {
            var registrationForm = {
                name: merchantName,
                email: merchantEmail,
                phoneNumber: merchantPhone,
                storeName: storeName,
                address: storeAddress,
                latitude: "0.0",
                longitude: "0.0",
                ruc: ruc,
                password: ""
            }
            onCreateAccountButtonClickedCallback(registrationForm)
        }
    }

    const [storeName, setStoreName] = useState("");
    const [ruc, setRuc] = useState("");
    const [merchantEmail, setMerchantEmail] = useState("");
    const [storeAddress, setStoreAddress] = useState("");
    const [merchantName, setMerchantName] = useState("");
    const [merchantPhone, setMerchantPhone] = useState("");

    const handleMerchantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMerchantName(event.target.value)
    };
    const handleStoreNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStoreName(event.target.value);
    };
    const handleRucChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRuc(event.target.value);
    };
    const handleMerchantPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMerchantPhone(event.target.value);
    };
    const handleMerchantEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMerchantEmail(event.target.value);
    };
    const handleStoreAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStoreAddress(event.target.value);
    };

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
            sx={{ minHeight:"700px", display:"flex", flexDirection:"row", pl:"50px", pr:"150px", mt:9}}
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
                    <TextField variant={"filled"} placeholder={"Nombre del restaurante"}
                               value={storeName}
                               onChange={handleStoreNameChange}
                    />
                    <TextField variant={"filled"} placeholder={"Nombre del propietario"}
                               value={merchantName}
                               onChange={handleMerchantNameChange}
                    />
                    <TextField variant={"filled"} placeholder={"Dirección del restaurante"}
                               value={storeAddress}
                               onChange={handleStoreAddressChange}
                    />
                    <TextField variant={"filled"} placeholder={"Ruc"}
                               value={ruc}
                               onChange={handleRucChange}
                    />
                    <TextField variant={"filled"} placeholder={"Número de teléfono"}
                               value={merchantPhone}
                               onChange={handleMerchantPhoneChange}
                    />
                    <TextField variant={"filled"} placeholder={"Correo electrónico"}
                               value={merchantEmail}
                               onChange={handleMerchantEmailChange}
                    />
                    <Button
                        variant={"contained"}
                        fullWidth={true}
                        sx={{py:1.7,backgroundColor:"#000000", mb:1}}
                        onClick={() => {
                            onCreateAccountButtonClicked()
                        }}
                    >Crear Cuenta</Button>
                </Stack>
            </Box>
        </Paper>
    )

}