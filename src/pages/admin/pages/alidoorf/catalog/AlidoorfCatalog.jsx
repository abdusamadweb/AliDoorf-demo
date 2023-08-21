import '../Alidoorf.scss'
import React from 'react'
import CatalogTitle from "./home/CatalogTitle";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";
import CatalogImg from "./home/CatalogImg";
import CatalogList from "./list/CatalogList";

const AlidoorfCatalog = () => {

    return (
        <div className='ali-catalog catalog admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf Catalog Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <div>
                <CatalogTitle />
                <CatalogImg />
            </div>

            <div>
                <CatalogList />
            </div>
        </div>
    )
}

export default AlidoorfCatalog
