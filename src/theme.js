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
            fontFamily: "DesignatedLogo",
            letterSpacing: "1px",
            fontSize: "1.25rem",
            color: darkTextColor
        },
        nav: {
            fontFamily: "DesignatedNav",
            color: navTextColor
        },
        accent: {
            fontFamily: "DesignatedAccent",
            fontSize: accentFontSize + "rem",
            color: lightTextColor,
            textShadow: `${shadowColor} 0px 4px 5px`,
            marginTop: blueOffset - (accentFontSize / 1.5) + "rem"
        },
        body: {
            fontFamily: "DesignatedBody",
            fontSize: "1.62rem",
            color: darkTextColor
        },
        aboutDescription: {
            fontFamily: "DesignatedNav",
            fontSize: "1.15rem",
            color: darkTextColor,
            lineHeight: "2rem"
        },
        smallTitle: {
            fontFamily: "DesignatedNav",
            fontSize: "1.2rem",
            color: darkTextColor,
            fontWeight: "bold"
        },
        aboutTitle: {
            fontFamily: "DesignatedNav-Heavy",
            fontSize: "3.35rem",
            fontWeight: "bold",
            color: lightTextColor
        },
        sectionTitle: {
            fontFamily: "DesignatedNav-Heavy",
            fontSize: "3rem",
            color: lightTextColor,
            textShadow: `${shadowColor} 0px 4px 5px`,
            letterSpacing: "0.6rem"
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
                    "-webkit-font-smoothing": "antialiased"
                }
            }
        }
    }
});
