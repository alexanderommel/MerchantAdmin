import {Box, Button, Container, Stack, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {medium_black,medium_green, soft_grey, medium_grey} from "../constants/Colors";
import {TestingDataProvider} from "../utils/TestingDataProvider";
import GroupModifierCard from "./GroupModifierCard";

export default function (){

    const product = TestingDataProvider.getProduct("Pizza")
    const group_modifiers = TestingDataProvider.getProductGroupModifiers(product)

    return(
        <Box>
            <Typography variant={"h4"} >
                Modificadores
            </Typography>
            <Typography variant={"h6"} pt={1.5} >
                ¡Aumenta la variedad de tus productos al añadir pequeños modificadores para una experiencia más variada!
            </Typography>
            <Button
                startIcon={<AddIcon />}
                sx={{marginTop:2, paddingY: 1.2}}
                variant="text">
                Añadir nuevo modificador
            </Button>
            <Box
                sx={{ backgroundColor:soft_grey, border: '1px dashed grey', marginTop:"12px"}}
            >
                <Typography
                    color={medium_grey}
                            variant={"h5"}
                            py={"150px"}
                            textAlign={"center"} >
                    ¡Aquí se mostrará los modificadores que hayas asignado a este producto, empieza por añadir uno!
                </Typography>
            </Box>
            <Stack
                direction={'column'}
                spacing={2.5}
            >
                <Typography>

                </Typography>
                {group_modifiers.map(
                    group_modifier => (
                        <GroupModifierCard group_modifier={group_modifier} />
                    )
                )}
            </Stack>
            <Button
                fullWidth={true}
                variant={"contained"}
                sx={{ paddingY:1.2,marginTop:2 ,backgroundColor:medium_black}}
            >
                Guardar cambios
            </Button>
        </Box>
    )
}