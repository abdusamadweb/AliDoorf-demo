import './App.scss'

// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import {useLayoutEffect, useState} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer";
import Alidoorf from "./pages/alidoorf-page/Alidoorf";

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark-theme' : ''}`}>
      <BrowserRouter>
        <Wrapper>

          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alidoorf' element={<Alidoorf />} />

          </Routes>

          <Footer />

        </Wrapper>
      </BrowserRouter>
    </div>
  )
}

export default App