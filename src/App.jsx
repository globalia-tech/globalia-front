
import HeaderFooter from './components/layout/HeaderFooter.jsx';
import { Outlet } from 'react-router-dom'; 
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import WhatsAppButton from './components/WhatsAppButton'; // <-- Importación agregada

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderFooter>
                <Outlet/>
                <WhatsAppButton /> {/* <-- El botón va aquí para que se vea en toda la web */}
            </HeaderFooter>
        </ThemeProvider>
    );
}

export default App;
