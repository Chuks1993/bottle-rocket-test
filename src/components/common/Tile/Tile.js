import React from 'react';
import PropTypes from 'prop-types';

import './Tile.scss';


const Tile = ({ name, category, img, contact, location, updateRestaurant }) => (
    <li className="tile" onClick={() => updateRestaurant(contact, location)} style={{ backgroundImage: `url(${img})` }}>
        <div className="shadow">
            <div className="tile__details">
                <h2 className="tile__details--header">{name}</h2>
                <h3 className="tile__details--header--sub">{category}</h3>
            </div>
        </div>
    </li>
);


Tile.propTypes = {
    name: PropTypes.string,
    category: PropTypes.string,
    img: PropTypes.string
}

export default Tile;