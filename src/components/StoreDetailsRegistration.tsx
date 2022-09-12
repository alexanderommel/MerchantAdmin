import {black, medium_black, medium_green, medium_grey, soft_grey, strong_grey} from "../constants/Colors";
import StoreImage from "../img/store_front.jpg";
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel, FormHelperText, InputLabel, MenuItem,
    Paper,
    Radio,
    RadioGroup, Select,
    Stack, TextField,
    Typography
} from "@mui/material";

interface props{
    onNextButtonClickedCallback: any
}

export default function ({onNextButtonClickedCallback}: props){

    const onNextButtonClicked = () => {
        onNextButtonClickedCallback()
    }

    return(
        <Box sx={{ minHeight:"700px", display:"flex", flexDirection:"column", pt:"30px", pb:"40px" , pl:"100px", pr:"100px"}} >
            <Stack
                direction={'column'}
                spacing={2.5}>
                    <Typography
                        align={"center"}
                        variant={"h5"}>
                        Configura la información de tu negocio
                    </Typography>
                    <Typography
                        color={strong_grey}
                        variant={"h6"}>
                        Si tienes más restaurantes asociados a la misma marca, puedes registrarlos después siguiendo el mismo procedimiento!
                    </Typography>
                    <Typography
                        variant={"body1"}
                        color={medium_grey}>
                        ¿Con que nombre deseas que los clientes identifiquen a este restaurante?
                    </Typography>
                    <TextField
                        variant={"filled"}
                        fullWidth={true}
                        placeholder={"Nombre del restaurante"}
                    />
                    <Typography
                        variant={"body1"}
                        color={medium_grey} >
                        Selecciona el tipo de restaurante:
                    </Typography>
                    <FormControl
                        fullWidth={true}
                        sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Categoría"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Hamburguesas</MenuItem>
                            <MenuItem value={20}>Comida Rápida</MenuItem>
                            <MenuItem value={30}>Comida Tradicional</MenuItem>
                            <MenuItem value={30}>Pizzas</MenuItem>
                            <MenuItem value={30}>Heladería</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography
                        color={medium_grey}
                        variant={"body2"}>
                        ¿Qué método de pago deseas que sea utilizado por tus clientes?
                    </Typography>
                    <RadioGroup
                        name={"payment-radio-group"}
                        defaultValue={"both"}
                        row={true}>
                        <FormControlLabel control={<Radio/>} label={"Ambos"} value={"both"} />
                        <FormControlLabel control={<Radio/>} label={"Efectivo"} value={"cash"} />
                        <FormControlLabel control={<Radio/>} label={"Tarjeta"} value={"target"} />
                    </RadioGroup>
                <Typography
                    variant={"body1"}
                    color={medium_grey}>
                    Ingrese un número de teléfono para que los clientes puedan comunicarse contigo
                </Typography>
                <TextField
                    variant={"filled"}
                    fullWidth={true}
                    placeholder={"Número de teléfono"}
                />
                <Typography
                    variant={"body1"}
                    color={medium_grey}>
                    Ingrese un correo electrónico para que los clientes puedan comunicarse contigo
                </Typography>
                <TextField
                    variant={"filled"}
                    fullWidth={true}
                    placeholder={"Correo electrónico"}
                />
                <Button
                    sx={{py:1.5}}
                    variant={"contained"}
                    onClick={() => {
                        onNextButtonClicked()
                    }}
                >Siguiente</Button>
            </Stack>
        </Box>
    )

}