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
import NewsId from "./pages/alidoorf-page/news/id/NewsId";
import SiteMap from "./pages/sitemap/SiteMap";

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

        'ali_home_page_access',
        'ali_about_page_access',
        'ali_news_page_access',
        'ali_catalog_page_access',

        'prime_home_page_access',
        'prime_about_page_access',
        'prime_news_page_access',
        'prime_catalog_page_access',

        'mebel_home_page_access',
        'mebel_about_page_access',
        'mebel_news_page_access',
        'mebel_catalog_page_access',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [])


    // colors from API
    useEffect(() => {
        const primary = !darkMode ? (result.data?.color_primary_light || '#eee') : result.data?.color_primary_dark
        document.documentElement.style.setProperty('--bg-body', primary)

        const secondary1 = !darkMode ? (result.data?.color_secondary1_light || '#eee') : result.data?.color_secondary1_dark
        document.documentElement.style.setProperty('--bg-chat', secondary1)

        const secondary2 = !darkMode ? (result.data?.color_secondary2_light || '#eee') : result.data?.color_secondary2_dark
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

                            <Route path='/' element={<Home lang={lang} type='ali'/>}/>

                            // alidoorf
                            {
                                result?.data?.ali_home_page_access === 'true' &&
                                <Route path='/alidoorf' element={<Alidoorf lang={lang} type='ali'/>}/>
                            }
                            // catalog
                            {
                                result?.data?.ali_catalog_page_access === 'true' &&
                                <>
                                    <Route path='/alidoorf/catalog' element={<Catalog lang={lang} type='ali'/>}/>
                                    <Route path={'/alidoorf/catalog/:id'} element={<CatalogItem lang={lang} type='ali'/>}/>
                                    <Route path={'/alidoorf/catalog/:id/:id'} element={<CatalogItemId lang={lang} type='ali'/>}/>
                                    <Route path={'/alidoorf/catalog/:id/:id/:id'} element={<CatalogProduct lang={lang} type='ali'/>}/>
                                </>
                            }
                            // about
                            {
                                result?.data?.ali_about_page_access === 'true' &&
                                <Route path='/alidoorf/about' element={<About lang={lang} type='ali'/>}/>
                            }
                            // news
                            {
                                result?.data?.ali_news_page_access === 'true' &&
                                <>
                                    <Route path='/alidoorf/news' element={<NewsPage lang={lang} type='ali'/>}/>
                                    <Route path='/alidoorf/news/:id' element={<NewsId lang={lang} type='ali'/>}/>
                                </>
                            }


                            // primeloft
                            {
                                result?.data?.prime_home_page_access === 'true' &&
                                <Route path='/primeloft' element={<Alidoorf lang={lang} type='prime'/>}/>
                            }
                            // catalog
                            {
                                result?.data?.prime_catalog_page_access === 'true' &&
                                <>
                                    <Route path='/primeloft/catalog' element={<Catalog lang={lang} type='prime'/>}/>
                                    <Route path={'/primeloft/catalog/:id'} element={<CatalogItem lang={lang} type='prime'/>}/>
                                    <Route path={'/primeloft/catalog/:id/:id'} element={<CatalogItemId lang={lang} type='prime'/>}/>
                                    <Route path={'/primeloft/catalog/:id/:id/:id'} element={<CatalogProduct lang={lang} type='prime'/>}/>
                                </>
                            }
                            // about
                            {
                                result?.data?.prime_about_page_access === 'true' &&
                                <Route path='/primeloft/about' element={<About lang={lang} type='prime'/>}/>
                            }
                            // news
                            {
                                result?.data?.prime_news_page_access === 'true' &&
                                <>
                                    <Route path='/primeloft/news' element={<NewsPage lang={lang} type='prime'/>}/>
                                    <Route path='/primeloft/news/:id' element={<NewsId lang={lang} type='prime'/>}/>
                                </>
                            }


                            // mebel
                            {
                                result?.data?.mebel_home_page_access === 'true' &&
                                <Route path='/mebel' element={<Alidoorf lang={lang} type='mebel'/>}/>
                            }
                            // catalog
                            {
                                result?.data?.mebel_catalog_page_access === 'true' &&
                                <>
                                    <Route path='/mebel/catalog' element={<Catalog lang={lang} type='mebel'/>}/>
                                    <Route path={'/mebel/catalog/:id'} element={<CatalogItem lang={lang} type='mebel'/>}/>
                                    <Route path={'/mebel/catalog/:id/:id'} element={<CatalogItemId lang={lang} type='mebel'/>}/>
                                    <Route path={'/mebel/catalog/:id/:id/:id'} element={<CatalogProduct lang={lang} type='mebel'/>}/>
                                </>
                            }
                            // about
                            {
                                result?.data?.mebel_about_page_access === 'true' &&
                                <Route path='/mebel/about' element={<About lang={lang} type='mebel'/>}/>
                            }
                            // news
                            {
                                result?.data?.mebel_news_page_access === 'true' &&
                                <>
                                    <Route path='/mebel/news' element={<NewsPage lang={lang} type='mebel'/>}/>
                                    <Route path='/mebel/news/:id' element={<NewsId lang={lang} type='mebel'/>}/>
                                </>
                            }

                            <Route path='/contacts' element={<Contacts lang={lang}/>}/>

                            // 404
                            <Route path='/*' element={<PageNotFound/>}/>

                            // site-map
                            <Route path='/sitemap.xml' element={<SiteMap />}/>


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