import {Box, Typography, Link, Stack, Divider} from "@mui/material";
import {Copyright} from "@mui/icons-material";

function TongueCopyright() {
    return (
        <Typography variant="caption" color="#ffffff" mr={"auto"} >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Tongue Services
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function (){



    return(
        <Box component={'footer'}
             sx={{
                 display: 'flex',
                 flexDirection: 'row',
                 py:2.5,
                 px:10,
                 mt:'auto',
                 backgroundColor: "#232323"
        }} >
            <TongueCopyright/>
            <Stack
                divider={<Divider orientation="vertical" color={"#ffffff"} flexItem />}
                direction={'row'}
                color={"#ffffff"}
                spacing={2}
                justifyContent={"flex-end"}
                my={"auto"}
            >
                <Typography variant="caption" >About</Typography>
                <Typography variant="caption" >Contact</Typography>
            </Stack>
        </Box>
    )

}