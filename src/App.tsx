import React from 'react';
import { Switch, Route } from 'react-router';
import { HeaderNav } from './components/HeaderNav/HeaderNav';
import Home from './pages/Home/Home';
import Analitics from './pages/Analitics/Analitics';
import logo from './assets/img/logo.svg';
import './assets/scss/base.scss';

export const App = () => {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home',
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'ion-ios-analytics',
    },
  ];
  return (
    <>
      <HeaderNav
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        linkColor="#777"
      />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/analytics/:filter?" render={() => <Analitics />} />
      </Switch>
    </>
  );
};
