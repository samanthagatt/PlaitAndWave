import { Box, Stack, Typography } from "@mui/material";

const About = () =>
    <Stack direction="row">
        {/* 
        // Alternate About section image with "Our Story"
        <Stack flex={1} justifyContent="end" alignItems="start" sx={{ 
            backgroundImage: "url(./Images/about.jpg)",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center"
        }}>
            <Typography variant="sectionTitle" sx={{ 
                marginBottom: "8rem",
                marginLeft: "5rem",
                lineHeight: "4.5rem",
                textShadow: "rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px"
            }}>
                Our<br/>Salon
            </Typography>
        </Stack> 
        */}
        <Stack flex={1} justifyContent="center" alignItems="center" sx={{
            backgroundImage: "url(./Images/about.jpg)",
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center"
        }}>
            {/*
            // "Our Salon"
            <Typography variant="sectionTitle" sx={{ 
                marginLeft: "-21.5rem",
                marginTop: "17rem",
                lineHeight: "4.5rem",
                textShadow: "rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px"
            }}>
                Our Salon
            </Typography>
            */}
        </Stack>
        <Box flex={1}>
            <Stack
                direction="column"
                spacing="2rem"
                padding="10rem 5rem"
            >
                <Typography variant="title">Get to Know Us</Typography>
                <Typography variant="aboutDescription">
                    Welcome to Plait + Wave, a premier hair salon located in beautiful Naples, FL. Founded in 2018 by Stevie, we specialize in custom colors using top industry techniques, including lived-in blonde, balayage, dimensional hair, and foilayage. Our talented team features the owner, Stevie with Plait + Wave, Corina with Chroma Salon, Cheyanne with Hair by Cheyanne Hamilton, and lash artist Francesca with Frankie's Designs, all dedicated to providing you with exceptional service and stunning results. Experience the perfect blend of creativity and talent at Plait + Wave, where we're all about making your hair dreams come true in a fun and relaxed vibe!
                </Typography>
            </Stack>
        </Box>
    </Stack>;

export default About;
