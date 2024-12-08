import { createTheme } from "@mui/material";

import { accentFontSize, blueOffset, headerHeight } from "./common";

export const theme = createTheme({
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
        aboutDescription: {
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
