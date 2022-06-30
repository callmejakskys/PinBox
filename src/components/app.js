import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
import Price from './pages/price';
import News from './pages/news';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Helpcenter path="/helpcenter" />
        <Colection path="/colection" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <LoginTwo path="/loginTwo" />
        <Register path="/register" />
        <Price path="/price" />
        <News path="/news" />
        <Create path="/create" />
        <Create2 path="/create2" />
        <Create3 path="/create3" />
        <Createoption path="/createOptions" />
        <Activity path="/activity" />
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;