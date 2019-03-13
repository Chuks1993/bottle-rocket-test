import React from 'react';
import "./Footer.scss";

const Footer = ({icon1, icon2, name1, name2}) => (
    <div className="footer">
        <div className="footer__icon">
            <img alt={name1}src={icon1} />
            <h3>Lunch</h3>
        </div>
        <div className="footer__icon">
            <img alt={name2} src={icon2} />
            <h3>Internets</h3>
        </div>
    </div>
);

export default Footer;