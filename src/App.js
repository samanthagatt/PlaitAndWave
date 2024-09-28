import { createTheme, StyledEngineProvider, ThemeProvider, Box, Typography } from '@mui/material';
import './App.css';
import Header from './Components/Header';
import focal from './Images/focal.jpeg';

const blueOffset = 7;
const accentFontSize = 8;

const App = () => {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "DesignatedLogo",
                letterSpacing: "1px",
                fontSize: "20px"
            },
            nav: {
                fontFamily: "DesignatedNav",
                color: "rgb(51,60,75)"
            },
            accent: {
                color: "#fff",
                fontFamily: "DesignatedAccent",
                fontSize: accentFontSize + "rem",
                textShadow: "0.15rem 0.15rem 0.6rem rgba(47, 46, 46, 0.6)",
                marginTop: blueOffset - (accentFontSize / 1.5) + "rem"
            }
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        color: "#000",
                        backgroundColor: "#fff",
                        boxShadow: "none",
                        height: "5.5rem",
                        justifyContent: "center"
                    }
                }
            }
        }
    });
    return <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ margin: "0 8rem" }}>
            <img src={focal} style={{
                height: "100%",
                width: "100%",
                marginTop: "5.5rem",
                borderRadius: "5px",
                boxShadow: "rgba(0,0,0,0.3) 0px 0px 2px 1px"
            }} />
        </Box>
        <Box sx={{
            backgroundColor: "rgb(213,231,240)",
            height: "25rem",
            marginTop: "-" + blueOffset + "rem",
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant="accent">salty, airy, light</Typography>
        </Box>
    </ThemeProvider>;
};

export default App;
