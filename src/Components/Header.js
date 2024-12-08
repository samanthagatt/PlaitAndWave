import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

const Header = () =>
    <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between", margin: "0 15.15rem" }}>
            <Typography variant="h1">PLAIT + WAVE</Typography>
            <Stack direction="row" spacing="2rem">
                <Typography variant="nav">About</Typography>
                <Typography variant="nav">Services</Typography>
                <Typography variant="nav">Reviews</Typography>
                <Typography variant="nav">Portfolio</Typography>
                <Typography variant="nav">Contact</Typography>
            </Stack>
        </Toolbar>
    </AppBar>;

export default Header;
