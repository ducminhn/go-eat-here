import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Menu from 'components/Global/Menu';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className="row">
            <div className="col-2">
              <Menu />
            </div>
            <div className="col-10">
              <Switch>
                <Route exact path={ publicPath } component={ Dashboard } />
                <Route path={ routeCodes.ABOUT } component={ About } />
                <Route path='*' component={ NotFound } />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
