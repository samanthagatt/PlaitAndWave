import { createTheme, ThemeProvider, Box, Typography, Stack } from '@mui/material';

import './App.css';
import Header from './Components/Header';

const headerHeight = 5.75;
const blueOffset = 7;
const accentFontSize = 8.15;

const App = () => {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "DesignatedLogo",
                letterSpacing: "1px",
                fontSize: "1.25rem"
            },
            nav: {
                fontFamily: "DesignatedNav",
                color: "rgb(51,60,75)"
            },
            accent: {
                color: "#fff",
                fontFamily: "DesignatedAccent",
                fontSize: accentFontSize + "rem",
                textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                marginTop: blueOffset - (accentFontSize / 1.5) + "rem"
            },
            body: {
                fontFamily: "DesignatedBody",
                fontSize: "1.62rem"
            },
            ourStory: {
                fontFamily: "DesignatedNav",
                fontSize: "1.15rem",
                lineHeight: "2rem"
            },
            title: {
                fontFamily: "DesignatedNav",
                fontSize: "1.2rem",
                fontWeight: "bold"
            },
            sectionTitle: {
                fontFamily: "DesignatedNav-Heavy",
                fontSize: "3.35rem",
                fontWeight: "bold",
                color: "#fff"
            }
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        color: "#000",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        height: headerHeight + "rem",
                        justifyContent: "center"
                    }
                }
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        // Makes font thinner by removing fuzzy edges (?)
                        "-webkit-font-smoothing": "antialiased"
                    }
                }
            }
        }
    });
    return <ThemeProvider theme={theme}>
        <Header />

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
            backgroundColor: "rgb(213,231,240)",
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

        <Stack direction="row">
            
            {/* // Alternate About section image with "Our Story"
            <Stack flex={1} justifyContent="end" alignItems="start" sx={{ 
                backgroundImage: "url(./Images/ourStory.jpg)",
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
            </Stack> */}
           
            <Stack flex={1} justifyContent="center" alignItems="center" sx={{ 
                backgroundImage: "url(./Images/ourStory.jpg)",
                backgroundSize: "cover",
                backgroundPositionX: "center",
                backgroundPositionY: "center"
            }}>
                {/* // "Our Salon"
                <Typography variant="sectionTitle" sx={{ 
                    marginLeft: "-21.5rem",
                    marginTop: "17rem",
                    lineHeight: "4.5rem",
                    textShadow: "rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px"
                }}>
                    Our Salon
                </Typography> */}
            </Stack>
            <Box flex={1}>
                <Stack
                    direction="column"
                    spacing="2rem"
                    padding="10rem 5rem"
                >
                    <Typography variant="title">Get to Know Us</Typography>
                    <Typography variant="ourStory">
                        Welcome to Plait + Wave, a premier hair salon located in beautiful Naples, FL. Founded in 2018 by Stevie, we specialize in custom colors using top industry techniques, including lived-in blonde, balayage, dimensional hair, and foilayage. Our talented team features the owner, Stevie with Plait + Wave, Corina with Chroma Salon, Cheyanne with Hair by Cheyanne Hamilton, and lash artist Francesca with Frankie's Designs, all dedicated to providing you with exceptional service and stunning results. Experience the perfect blend of creativity and talent at Plait + Wave, where we're all about making your hair dreams come true in a fun and relaxed vibe!
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    </ThemeProvider>;
};

export default App;
