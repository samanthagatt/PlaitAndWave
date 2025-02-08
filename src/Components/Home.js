import { Box, Typography, Stack } from "@mui/material";

import { blueOffset, headerHeight } from "../common";
import { accentBackgroundColor } from "../theme";

const Home = () => (
    <section>
        <Box sx={{ margin: "0 8rem" }}>
            <img src="./Images/focal.jpeg" style={{
                height: "100%",
                width: "100%",
                marginTop: headerHeight + "rem",
                borderRadius: "5px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
            }} />
        </Box>

        <Stack alignItems="center" sx={{
            backgroundColor: accentBackgroundColor,
            marginTop: "-" + blueOffset + "rem",
            paddingBottom: "2.25rem"
        }}>
            <Typography variant="accent" textAlign="center">salty, airy, light</Typography>
            <Typography
                variant="body"
                marginTop="3.65rem"
                width="45rem"
                textAlign="center"
                lineHeight="2.25rem">
                the beach hair you've always dreamed of with little maintainence.
            </Typography>
            <Typography
                variant="body"
                marginTop="2.75rem"
                sx={{ fontSize: "1.37rem" }}
            >
                foilayage | balayage | lived in hair
            </Typography>
        </Stack>
    </section>
);

export default Home;
