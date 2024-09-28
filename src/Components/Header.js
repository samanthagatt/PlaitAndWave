import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () =>
    <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between", margin: "0 15rem" }}>
            <Typography variant="h1">PLAIT + WAVE</Typography>
            <Stack direction="row" spacing="2rem">
                <Typography variant="nav">Our Story</Typography>
                <Typography variant="nav">Services</Typography>
                <Typography variant="nav">Reviews</Typography>
                <Typography variant="nav">Portfolio</Typography>
                <Typography variant="nav">Contact</Typography>
            </Stack>
        </Toolbar>
    </AppBar>;

export default Header;
