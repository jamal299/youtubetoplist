import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
     Route, 
     Switch 
     } from 'react-router-dom';
import '../src/css/login.css';
import Login from './Login';
import Userinfo from './Userinfo'
import {Provider} from 'react-redux';
import {store} from './util'

ReactDOM.render(
<Provider store={store}>

<Router>
    		<div>
            {console.log(store.getState(),"Index")}
    			<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/user:username" component={Userinfo} />
				</Switch>
			</div>
		</Router>
  	</Provider>, document.getElementById('root'));

