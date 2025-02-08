import { ThemeProvider } from "@mui/material";

import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";

import { theme } from "./theme"
import Services from "./Components/Services";
import Reviews from "./Components/Reviews";
import Portfolio from "./Components/Portfolio";

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
        <Services />
        <Reviews />
        <Portfolio />
    </ThemeProvider>
);

export default App;
