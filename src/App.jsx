import './App.css'
import HeaderFooter from './components/HeaderFooter'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      
      <HeaderFooter>
        <Outlet/>
      </HeaderFooter>
    </>
  )
}

export default App
