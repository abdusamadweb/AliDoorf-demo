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
import Catalog from "./pages/alidoorf-page/catalog/Catalog";
import {ReactLenis} from '@studio-freight/react-lenis'
import About from "./pages/alidoorf-page/about/About";
import NewsPage from "./pages/alidoorf-page/news/NewsPage";
import Primeloft from "./pages/primeloft-page/Primeloft";
import PrimeCatalog from "./pages/primeloft-page/catalog/PrimeCatalog";
import PrimeAbout from "./pages/primeloft-page/about/PrimeAbout";
import PrimeNewsPage from "./pages/primeloft-page/news/PrimeNewsPage";
import Contacts from "./pages/contacts/Contacts";
import PageNotFound from "./components/page-not-found/PageNotFound";
import RequireAuth from "./components/RequireAuth";
import AdminHome from "./pages/admin/home/AdminHome";
import Login from "./pages/admin/login/Login";

const Wrapper = ({children}) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}

function App() {

    const [darkMode, setDarkMode] = useState(false)

    const userLang = navigator.language || navigator.userLanguage
    const [lang, setLang] = useState(userLang)


    return (
        <ReactLenis root>
            <div className={`App ${darkMode ? 'dark-theme' : ''}`}>
                <BrowserRouter>
                    <Wrapper>

                        <Header
                            darkMode={darkMode}
                            setDarkMode={setDarkMode}
                            lang={lang}
                            setLang={setLang}
                        />

                        <Routes>

                            <Route path='/' element={<Home/>}/>

                            <Route path='/alidoorf' element={<Alidoorf/>}/>
                            <Route path='/alidoorf/catalog' element={<Catalog/>}/>
                            <Route path='/alidoorf/about' element={<About/>}/>
                            <Route path='/alidoorf/news' element={<NewsPage/>}/>

                            <Route path='/primeloft' element={<Primeloft/>}/>
                            <Route path='/primeloft/catalog' element={<PrimeCatalog/>}/>
                            <Route path='/primeloft/about' element={<PrimeAbout/>}/>
                            <Route path='/primeloft/news' element={<PrimeNewsPage/>}/>

                            <Route path='/mebel' element={<Alidoorf/>}/>

                            <Route path='/contacts' element={<Contacts/>}/>

                            // 404
                            <Route path='*' element={<PageNotFound />} />


                            // Protect-able routes
                            <Route element={<RequireAuth />}>

                                <Route path='/admin' element={<AdminHome />} />

                            </Route>

                            <Route path='/admin/login' element={<Login />} />

                        </Routes>

                        <Footer/>

                    </Wrapper>
                </BrowserRouter>
            </div>
        </ReactLenis>
    )
}

export default App