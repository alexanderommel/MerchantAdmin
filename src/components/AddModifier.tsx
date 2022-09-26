import {
    Box,
    Button, FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel, MenuItem, Select,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {medium_black, medium_grey, soft_grey} from "../constants/Colors";
import GroupModifierCard from "./GroupModifierCard";
import {TestingDataProvider} from "../utils/TestingDataProvider";
import {Modifier} from "../domain/Modifier";
import React, {useState} from "react";
import {GroupModifier} from "../domain/GroupModifier";
import ModifierCard from "./ModifierCard";


export default function (){

    const product = TestingDataProvider.getProduct("Pizza")
    const group_modifiers = TestingDataProvider.getProductGroupModifiers(product)
    const modifiers = TestingDataProvider.getModifiers(group_modifiers[1])
    //const [groupModifier, setGroupModifier] = useState({} as GroupModifier);
    //const [modifiers, setModifiers] = useState([] as Modifier[]);

    return(
        <Box>
            <Typography variant={"h4"} >
                Crea un nuevo modificador
            </Typography>
            <Typography variant={"h6"} pt={1.5} >
                ¡Aumenta la variedad de tus productos al añadir pequeños modificadores para una experiencia más variada!
            </Typography>
            <Box my={3}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <TextField variant={"filled"} fullWidth={true}
                                   hiddenLabel
                                   size={"small"}
                                   placeholder={"Nombre del modificador"}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl
                            size={"small"}
                            fullWidth={true}>
                            <InputLabel id="demo-simple-select-helper-label">Tipo de modificador</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Categoría"
                            >
                                <MenuItem value={1}>Opcional</MenuItem>
                                <MenuItem value={2}>Obligatorio</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={4}>
                            <Grid item xs={8}>
                                <TextField variant={"filled"} fullWidth={true}
                                           hiddenLabel
                                           placeholder={"Nombre de la opción"}
                                           size={"small"}
                                ></TextField>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    startIcon={<AddIcon />}
                                    variant={"contained"}
                                    fullWidth={true}
                                        sx={{backgroundColor:"#529930", height:"100%"}}
                                        onClick={() => {
                                        }}
                                >Agregar Opción</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{ backgroundColor:soft_grey, border: '1px grey', marginTop:"12px", display: 'none'}}
            >
                <Typography
                    color={medium_grey}
                    variant={"h5"}
                    py={"150px"}
                    textAlign={"center"} >
                    ¡Aquí se mostrará las opciones que tendrá este modificador, empieza por añadir uno!
                </Typography>
            </Box>
            <Stack
                direction={'column'}
                spacing={2.5}
                justifyContent="center"
                alignItems="center"
                maxWidth={"sm"}
                mx={"auto"}
                my={4}
            >
                <Typography
                variant={"h4"}
                textAlign={"center"}
                my={4}
                >
                    Opciones del modificador del producto
                </Typography>
                {modifiers.map(
                    modifier => (
                        <ModifierCard modifier={modifier} />
                    )
                )}
            </Stack>
            <Button
                fullWidth={true}
                variant={"contained"}
                sx={{ paddingY:1.2,marginTop:4 ,backgroundColor:medium_black}}
            >
                Guardar cambios
            </Button>
        </Box>
    )
}