import HeaderFooter from './components/layout/HeaderFooter.jsx'
import { Outlet } from 'react-router'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme'

function App() {

  return (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderFooter>
        <Outlet/>
      </HeaderFooter>
        </ThemeProvider>
    </>
  )
}

export default App
