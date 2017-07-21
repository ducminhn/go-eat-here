import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import GoogleMapReact from 'google-map-react';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))


export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    mapProperty: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  static defaultProps = {
    // 49.2754111,-123.1248643 Yaletown Coordinate
    center: {lat: 49.2754111, lng: -123.1248643},
    zoom: 11
  };

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);

    
  }

  createMapOptions(maps) {
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT,
            style: maps.ZoomControlStyle.SMALL
        },
        gestureHandling: 'greedy',
        fullscreenControl: false,
        styles: [{ stylers: [{ 'visibility': 'on' }] }]
    }
  }


  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      counter
    } = this.props;

    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyAUNLerJpzBHXcVdFbB_GYFwnRKKpP28Lw'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
