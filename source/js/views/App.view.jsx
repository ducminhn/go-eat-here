import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'views/Home.view';
import NotFound from 'views/NotFound.view';
import Menu from 'components/Global/Menu';
import Map from 'views/Map.view';
import Categories from 'views/Categories.view';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  CATEGORIES: `${ publicPath }categories`,
  MAP: `${ publicPath }map`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter history={ history }>
        <div className='App'>
          <Switch>
            <Route exact path={ publicPath } component={ HomePage } />
            <Route path={ routeCodes.CATEGORIES } component={ Categories } />
            <Route path={ routeCodes.MAP } component={ Map } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
