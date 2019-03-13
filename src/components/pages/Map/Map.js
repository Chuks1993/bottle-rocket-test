import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Map.scss';

import Layout from '../../common/Layout';

class Map extends Component {

  render() {
    console.log(this.props);
    return (
        <Layout>
          <div>{this.props.contact}</div>
          <div>{this.props.location}</div>
        </Layout>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.restaurant.contact.phone,
  location: state.restaurant.location.address
});

export default connect(mapStateToProps)(Map);
