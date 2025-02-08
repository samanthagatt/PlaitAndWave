import { createTheme } from "@mui/material";

import { accentFontSize, blueOffset, headerHeight } from "./common";

export const lightBackgroundColor = "rgb(255, 255, 255)";
export const accentBackgroundColor = "rgb(213,231,240)";
const lightTextColor = "rgb(255, 255, 255)";
const darkTextColor = "rgb(0, 0, 0)";
const navTextColor = "rgb(51,60,75)";
const shadowColor = "rgba(0, 0, 0, 0.4)";

export const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Logo",
            letterSpacing: "1px",
            fontSize: "1.25rem",
            color: darkTextColor
        },
        nav: {
            fontFamily: "Nav",
            color: navTextColor
        },
        accent: {
            fontFamily: "Accent",
            fontSize: accentFontSize + "rem",
            color: lightTextColor,
            textShadow: `${shadowColor} 0px 4px 5px`,
            marginTop: blueOffset - (accentFontSize / 1.5) + "rem"
        },
        body: {
            fontFamily: "Body",
            fontSize: "1.62rem",
            color: darkTextColor
        },
        aboutDescription: {
            fontFamily: "Nav",
            fontSize: "1.15rem",
            color: darkTextColor,
            lineHeight: "2rem"
        },
        smallTitle: {
            fontFamily: "Nav",
            fontSize: "1.2rem",
            color: darkTextColor,
            fontWeight: "bold"
        },
        aboutTitle: {
            fontFamily: "Nav-Heavy",
            fontSize: "3.35rem",
            fontWeight: "bold",
            color: lightTextColor
        },
        sectionTitle: {
            fontFamily: "Nav-Heavy",
            fontSize: "3.25rem",
            color: lightTextColor,
            textShadow: `${shadowColor} 0px 4px 5px`,
            letterSpacing: "0.65rem"
        },
        servicesTitle: {
            fontFamily: "Font11",
            fontSize: "1.15rem",
            letterSpacing: "0.05rem"
        },
        servicesPrice: {
            fontFamily: "Font3",
            fontSize: "1.1rem"
        },
        // TODO: SMFG - This is bolder in safari than firefox
        servicesDetails: {
            fontFamily: "Font3",
            fontWeight: "bold",
            fontSize: "0.9rem",
            lineHeight: "1.25rem"
        },
        navArrows: {
            fontFamily: "Nav",
            padding: "2rem",
            fontSize: "6rem",
            color: "white",
            cursor: "pointer",
            userSelect: "none",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
            "&:hover": { color: "rgba(255,255,255,0.7)" }
        },
        reviewDescription: {
            fontFamily: "Nav",
            textAlign: "center",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1)",
            color: "white",
            fontSize: "1.5rem",
            lineHeight: "2.25rem"
        },
        reviewAuthor: {
            fontFamily: "Nav",
            textAlign: "center",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1)",
            color: "white",
            fontSize: "1.5rem"
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: darkTextColor,
                    backgroundColor: lightBackgroundColor,
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
                    WebkitFontSmoothing: "antialiased"
                }
            }
        }
    }
});
