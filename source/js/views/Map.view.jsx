import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions/app';
import GoogleMapReact from 'google-map-react';

function createMapOptions(maps) {
  return {
      zoomControlOptions: {
          position: maps.ControlPosition.TOP_RIGHT,
          style: maps.ZoomControlStyle.SMALL
      },
      scrollwheel: false,
      gestureHandling: 'greedy',
      fullscreenControl: false,
      styles: [{ stylers: [{ 'visibility': 'on' }] }]
  }
}

class Map extends Component {

  static defaultProps = {
    // 49.2754111,-123.1248643 Yaletown Coordinate
    center: {lat: 49.2754111, lng: -123.1248643},
    zoom: 14
  };

  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props.selected_category);
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyAUNLerJpzBHXcVdFbB_GYFwnRKKpP28Lw'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={createMapOptions}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps({ app_data }){
  return{
    restaurants: app_data.restaurants,
    selected_category: app_data.selected_category
  }
}

export default connect(mapStateToProps, actions)(Map);