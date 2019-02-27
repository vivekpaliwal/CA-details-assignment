import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AppHeader }  from './components/SiteComp.jsx';
import FindAccount  from './components/LandingPage.jsx';
import CaListPageComp from './components/CaList.jsx';
import CaDetailPageComp from './components/CaDetails.jsx';


class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
   				<Route path=""  component={AppHeader} />
   				<Route path="/" exact strict component={FindAccount} />
   				<Route path="/list" exact strict component={CaListPageComp} />
   				<Route path="/ca-details" exact strict component={CaDetailPageComp} />
   			</div>
   		</Router>
    )
  }
}

export default App;
