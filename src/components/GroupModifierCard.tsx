import {Box, Grid, Typography} from "@mui/material";
import {GroupModifier} from "../interfaces/GroupModifier";
import {medium_green} from "../constants/Colors";

interface props{
    group_modifier: GroupModifier
}

export default function ({group_modifier}: props ){

    return(
        <Grid container xs={12} spacing={2} sx={{backgroundColor:medium_green, py:2 }} >
            <Grid item xs={2} >
                <Typography my={"auto"} >
                    {group_modifier.id}
                </Typography>
            </Grid>
            <Grid item xs={6}  >
                <Box>
                    <Typography>
                        {group_modifier.name}
                    </Typography>
                    <Typography>
                        {group_modifier.type}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    Editar
                </Typography>
            </Grid>
        </Grid>
    )

}