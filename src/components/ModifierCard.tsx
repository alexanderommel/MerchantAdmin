import {Box, Button, Container, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {Modifier} from "../domain/Modifier";

interface props{
    modifier: Modifier
}

export default function ({modifier}:props){
    return(
        <Container >
            <Grid container xs={12} spacing={1}
                  justifyContent="space-between"
                  sx={{ py:1}} >
                <Grid item xs={8} my={"auto"} >
                    <Box my={"auto"}>
                        <Typography variant={"h6"} >
                            {modifier.name}
                        </Typography>
                    </Box>
                </Grid>
                <Grid container item xs={4}
                      my={"auto"}
                      justifyContent={"end"}>
                    <Grid item>
                        <Button
                            size={"small"}
                            startIcon={<AddIcon />}>
                            Editar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size={"small"}
                            startIcon={<DeleteIcon />}>
                            Eliminar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}