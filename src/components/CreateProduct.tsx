import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import StoreImage from "../img/store_front.jpg";
import {medium_black,medium_green} from "../constants/Colors";

export default function(){

    const styles = {
        paperContainer: {
            backgroundImage: 'url(' + StoreImage + ')',
            backgroundPosition: "center",
            backgroundSize: "cover",
        }
    }

    return(
        <Box flexDirection={"column"} >
            <Typography variant={"h4"} >
                Crear Producto
            </Typography>
            <Typography variant={"h6"} pt={1.5} >
                ¡El éxito de tu producto esta influenciado por su imagen!
            </Typography>
            <Grid container xs={12} spacing={4} my={2} >
                <Grid item container direction={"column"} xs={4} >
                    <Paper
                        style={styles.paperContainer}
                        sx={{ height:"0", width:"100%", paddingBottom: "100%"}}
                        elevation={12}
                    >
                    </Paper>
                    <Button
                        fullWidth={true}
                        variant={"contained"}
                        sx={{marginTop:2, backgroundColor:medium_black}}
                    >
                        Cambiar imagen
                    </Button>
                </Grid>
                <Grid item container direction={"column"} xs spacing={5} sx={{marginTop:1.5}} >
                    <Grid item>
                        <TextField
                            variant={"filled"}
                            fullWidth={true}
                            placeholder={"Nombre"}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant={"filled"}
                            fullWidth={true}
                            placeholder={"Descripción"}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant={"filled"}
                            fullWidth={true}
                            placeholder={"Precio"}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl
                            fullWidth={true}
                            sx={{minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Categoría"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant={"h6"} pt={1.5} >
                ¡No olvides que puedes añadir modificadores a tus productos!
            </Typography>
            <Button
                fullWidth={true}
                variant={"contained"}
                sx={{marginTop:2, backgroundColor:medium_green, paddingY:1.2}}
            >
                Ver modificadores del producto
            </Button>
            <Button
                fullWidth={true}
                variant={"contained"}
                sx={{ paddingY:1.2,marginTop:2 ,backgroundColor:medium_black}}
            >
                Guardar y crear
            </Button>
        </Box>
    )
}