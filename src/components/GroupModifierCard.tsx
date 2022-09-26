import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {GroupModifier} from "../domain/GroupModifier";
import {medium_green} from "../constants/Colors";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface props{
    group_modifier: GroupModifier
}

export default function ({group_modifier}: props ){

    return(
        <Grid container xs={12} spacing={1} sx={{ py:2 }} >
            <Grid item xs={1} my={"auto"}  >
                <Container>
                    <Typography my={"auto"} variant={"h6"} component={"h5"} >
                        {group_modifier.id}
                    </Typography>
                </Container>
            </Grid>
            <Grid item xs={7} my={"auto"} >
                <Box my={"auto"}>
                    <Typography variant={"h6"} >
                        {group_modifier.name}
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        {group_modifier.type}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Container>
                    <Button
                        size={"large"}
                        startIcon={<AddIcon />}>
                        Editar
                    </Button>
                    <Button
                        size={"large"}
                        startIcon={<DeleteIcon />}>
                        Eliminar
                    </Button>
                </Container>
            </Grid>
        </Grid>
    )

}