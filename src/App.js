import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () =>
    <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>;

const Clients = () =>
    <div>
        <h1>Clients</h1>
        <p><Link to='/clients/eugene'>Eugene</Link></p>
        <p><Link to='/clients/olga'>Olga</Link></p>
        <Route path="/clients/:client" component={Client}/>
    </div>;

const Client = ({ match }) =>
    <div>Client view: {match.params.client}</div>;

const App = () =>
    <Router>
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <Link to="/">Home</Link>
                    &nbsp;
                    <Link to="/clients">Clients</Link>
                </div>
            </div>
            <Route exact path="/" component={Home}/>
            <Route path="/clients" component={Clients}/>
        </div>
    </Router>;

export default App;
