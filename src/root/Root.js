import React from 'react';

import { Route, Switch, NavLink} from 'react-router-dom';

import HomePage from '../components/HomePage';
import AdoptionPage from '../components/AdoptionPage';

import '../styles/Root.css';

function Root() {
  return <div>
    <header>
      <div className="left-header">
        <NavLink to="/">Petful</NavLink>
      </div>
      <div className="right-header">
        <NavLink to="/adoption"><button>Start Adopting</button></NavLink>
      </div>
    </header>
    <Switch>
      <HomePage exact path='/' component={() => <HomePage />} />
      <Route exact path='/adoption' component={() => <AdoptionPage />} />
    </Switch>
  </div>
}

export default Root;
