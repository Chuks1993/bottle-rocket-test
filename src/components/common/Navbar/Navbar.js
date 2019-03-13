import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss";
import backArrow from '../../../assets/img/ic_webBack@2x.png';
import mapIcon from '../../../assets/img/icon_map@2x.png';

const Navbar = () => (
    <div className="navbar">
        <Link to="/">
            <img alt="back arrow" src={backArrow} />
        </Link>
        <h1 className="navbar--header">Lunch Tyme</h1>
        <Link to="/map">
            <img alt="map icon" src={mapIcon} />
        </Link>
    </div>
);

export default Navbar;