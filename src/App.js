import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Route, Link} from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import logo from './logo.svg';
import './App.css';
import reducers from './reducers';
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";

const history = new HashRouter().history;
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
    ...reducers,
    router: routerReducer
}), applyMiddleware(middleware));

const Home = () =>
    <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>;

const Todos = () =>
    <div>
        <h1>Todos</h1>
        <AddTodo/>
        <TodoList/>
    </div>;

const App = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <Link to="/">Home</Link>
                        &nbsp;
                        <Link to="/todos">Todos</Link>
                    </div>
                </div>
                <div className="App-body">
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" component={Todos}/>
                </div>
            </div>
        </ConnectedRouter>
    </Provider>;

export default App;
