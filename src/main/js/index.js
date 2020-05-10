import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './comp/App.js'
import Jokes from './comp/Joker.js'
import Header from './comp/Header.js'
import Notes from './comp/Notes.js'

ReactDOM.render(<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={() => <Header><App /></Header>} />
        <Route  path='/contact' render={() => <Header><Jokes /></Header>} />
        <Route path='/notes' render={()=><Header><Notes /></Header> }/>
    </Switch>
</Router>, document.getElementById('react'))

