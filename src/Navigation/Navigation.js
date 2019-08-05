import React, {Component} from 'react';
import {Route} from 'react-router';
import {BrowserRouter,Switch,HashRouter} from 'react-router-dom';
import App from './App.js';
import Display from './display';
import Dummy from './dummy';


export default class Navigation  extends Component{
	render(){
		return(
                <BrowserRouter>
                    <Switch>
                          <Route exact path='/' component={App}/>
                          <Route exact path='/home' component={App}/>
                          <Route exact path='/dummy' component={Dummy}/>

                     </Switch>
                </BrowserRouter>     
			);
	}
}
