import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App.view';
import driveLogo from '../../../assets/img/logo.png';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <img
          src={driveLogo}
          alt='Work & Co logo'
        />
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={routeCodes.DASHBOARD}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={routeCodes.ABOUT}
          >
            About
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='404'
          >
            404
          </NavLink>
        </div>
      </div>
    );
  }
}
