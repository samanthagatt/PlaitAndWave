import { ThemeProvider } from '@mui/material';

import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';

import { theme } from './theme'

const App = () =>
    <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
    </ThemeProvider>;

export default App;
