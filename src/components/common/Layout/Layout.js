import React from 'react';

import "./Layout.scss";

import Navbar from '../Navbar';
import Footer from '../Footer';

import mapIcon from '../../../assets/img/icon_map@2x.png';
import lunchIcon from '../../../assets/img/tab_lunch@2x.png';
import internetsIcon from '../../../assets/img/tab_internets@2x.png';



const Layout = ({children}) => (
    <div className="layout">
        <Navbar icon={mapIcon} />
        <ul className="layout__container">
        {children}
        </ul>
        <Footer 
        name1="lunch icon" 
        name2="internets icon" 
        icon1={lunchIcon}
        icon2={internetsIcon} />
    </div>
);

export default Layout;