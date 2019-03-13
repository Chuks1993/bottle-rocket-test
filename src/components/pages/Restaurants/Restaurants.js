import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { updateRestaurant } from '../../../helpers/actions/restaurant-action';

import './Restaurants.scss';

import Layout from '../../common/Layout';
import Tile from '../../common/Tile';

const API = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      data: data.restaurants
    }));
  }

  updateRestaurant = (contact, location) => {
    this.props.onUpdateRestaurant(contact, location);
  }

  render() {
    const listElements = this.state.data.map(({ name, backgroundImageURL, category, contact, location }) =>
      <Tile
        name={name}
        category={category}
        img={backgroundImageURL}
        contact={contact}
        location={location}
        updateRestaurant={this.updateRestaurant} />
    );

    return (
        <Layout>
          {listElements}
        </Layout>
    );
  }
}

const mapActionsToProps = {
  onUpdateRestaurant: updateRestaurant
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapActionsToProps)(Restaurants);
