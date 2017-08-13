import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import {Container} from 'reactstrap';
import AppNavbar, {NavItem} from './AppNavbar';

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
            <div>
                <AppNavbar>
                    <NavItem to="/" exact={true}>Home</NavItem>
                    <NavItem to="/todos">Todos</NavItem>
                </AppNavbar>
                <Container className="py-3">
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" component={Todos}/>
                </Container>
            </div>
        </ConnectedRouter>
    </Provider>;

export default App;
