import './App.scss'

// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import React, {useEffect, useLayoutEffect, useState} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer";
import Alidoorf from "./pages/alidoorf-page/main/Alidoorf";
import Catalog from "./pages/alidoorf-page/catalog/Catalog";
import {ReactLenis} from '@studio-freight/react-lenis'
import About from "./pages/alidoorf-page/about/About";
import NewsPage from "./pages/alidoorf-page/news/NewsPage";
import Contacts from "./pages/contacts/Contacts";
import PageNotFound from "./components/page-not-found/PageNotFound";
import RequireAuth from "./components/RequireAuth";
import AdminHome from "./pages/admin/home/AdminHome";
import Login from "./pages/admin/login/Login";
import {Toaster} from "react-hot-toast";
import AdminHeader from "./pages/admin/header/AdminHeader";
import AdminMain from "./pages/admin/pages/main/AdminMain";
import AlidoorfHome from "./pages/admin/pages/alidoorf/home/AlidoorfHome";
import AlidoorfCatalog from "./pages/admin/pages/alidoorf/catalog/AlidoorfCatalog";
import AlidoorfAbout from "./pages/admin/pages/alidoorf/about/AlidoorfAbout";
import AlidoorfNews from "./pages/admin/pages/alidoorf/news/AlidoorfNews";
import Colors from "./pages/admin/colors/Colors";
import AdminMenu from "./pages/admin/menu/AdminMenu";
import Forms from "./pages/admin/forms/Forms";
import AdminFooter from "./pages/admin/footer/AdminFooter";
import {getPostData, userLang} from "./api/apiResp";
import CatalogItem from "./pages/alidoorf-page/catalog/CatalogItem";
import CatalogProduct from "./pages/alidoorf-page/catalog/CatalogProduct";
import CatalogItemId from "./pages/alidoorf-page/catalog/CatalogItemId";
import AlidoorfCatalogId from "./pages/admin/pages/alidoorf/catalog/id/AlidoorfCatalogId";
import Product from "./pages/admin/pages/alidoorf/catalog/id/Product";

const Wrapper = ({children}) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}

function App() {

    const [darkMode, setDarkMode] = useState(false)

    const [result, setResult] = useState([])
    const arr = [
        'color_primary_light',
        'color_primary_dark',
        'color_secondary1_light',
        'color_secondary1_dark',
        'color_secondary2_light',
        'color_secondary2_dark',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [])


    useEffect(() => {
        const primary = !darkMode ? result.data?.color_primary_light : result.data?.color_primary_dark
        document.documentElement.style.setProperty('--bg-body', primary)

        const secondary1 = !darkMode ? result.data?.color_secondary1_light : result.data?.color_secondary1_dark
        document.documentElement.style.setProperty('--bg-chat', secondary1)

        const secondary2 = !darkMode ? result.data?.color_secondary2_light : result.data?.color_secondary2_dark
        document.documentElement.style.setProperty('--bg-chat-contact', secondary2)
    }, [darkMode, result])


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
                        <AdminHeader/>

                        <Routes>

                            <Route path='/' element={<Home lang={lang}/>}/>

                            <Route path='/alidoorf' element={<Alidoorf lang={lang}/>}/>

                            <Route path='/alidoorf/catalog' element={<Catalog lang={lang}/>}/>
                            <Route path={'/alidoorf/catalog/:id'} element={<CatalogItem lang={lang}/>}/>
                            <Route path={'/alidoorf/catalog/:id/:id'} element={<CatalogItemId lang={lang}/>}/>
                            <Route path={'/alidoorf/catalog/:id/:id/:id'} element={<CatalogProduct lang={lang}/>}/>

                            <Route path='/alidoorf/about' element={<About lang={lang}/>}/>
                            <Route path='/alidoorf/news' element={<NewsPage lang={lang}/>}/>

                            <Route path='/primeloft' element={<Alidoorf lang={lang}/>}/>
                            <Route path='/primeloft/about' element={<About lang={lang}/>}/>
                            <Route path='/primeloft/news' element={<NewsPage lang={lang}/>}/>

                            <Route path='/mebel' element={<Alidoorf lang={lang}/>}/>

                            <Route path='/contacts' element={<Contacts/>}/>

                            // 404
                            <Route path='*' element={<PageNotFound/>}/>


                            // Protect-able routes
                            <Route element={<RequireAuth/>}>

                                <Route path='/admin' element={<AdminHome/>}/>

                                <Route path='/admin/colors' element={<Colors/>}/>

                                <Route path='/admin/menu' element={<AdminMenu/>}/>

                                <Route path='/admin/forms' element={<Forms/>}/>

                                <Route path='/admin/footer' element={<AdminFooter/>}/>

                                <Route path='/admin/pages/main' element={<AdminMain/>}/>

                                <Route path='/admin/pages/alidoorf/home' element={<AlidoorfHome/>}/>

                                <Route path='/admin/pages/alidoorf/catalog' element={<AlidoorfCatalog/>}/>
                                <Route path='/admin/pages/alidoorf/catalog/:id' element={<AlidoorfCatalogId/>}/>
                                <Route path='/admin/pages/alidoorf/catalog/:id/:id' element={<Product/>}/>

                                <Route path='/admin/pages/alidoorf/about' element={<AlidoorfAbout/>}/>
                                <Route path='/admin/pages/alidoorf/news' element={<AlidoorfNews/>}/>

                                <Route path='/admin/pages/primeloft/home' element={<AdminHome/>}/>
                                <Route path='/admin/pages/primeloft/about' element={<AdminHome/>}/>
                                <Route path='/admin/pages/primeloft/news' element={<AdminHome/>}/>

                                <Route path='/admin/pages/mebel/home' element={<AdminHome/>}/>
                                <Route path='/admin/pages/mebel/about' element={<AdminHome/>}/>
                                <Route path='/admin/pages/mebel/news' element={<AdminHome/>}/>

                            </Route>

                            <Route path='/admin/login' element={<Login/>}/>

                        </Routes>

                        <Footer darkMode={darkMode} lang={lang}/>

                        <Toaster
                            containerClassName="toast"
                            position="top-center"
                            reverseOrder={false}
                        />

                    </Wrapper>
                </BrowserRouter>
            </div>
        </ReactLenis>
    )
}

export default App