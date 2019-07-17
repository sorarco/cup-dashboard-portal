import React from 'react';
import { Provider, connect } from 'react-redux';
import Counter from './counter';
import reactLogo from '../assets/react-logo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

export default class Root extends React.Component {


    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    home = () => {
        return (
            <div style={{ marginTop: 100 }}>
                <h2>Home</h2>
                <Link to="/two">two</Link>
            </div>
        );
    }

    two = () => {
        return (
            <div style={{ marginTop: 100 }}>
                <h2>Two</h2>
            </div>
        );
    }

    render() {

        return (

            <HashRouter basename="/app1" >
                <Switch>
                    <Route exact path="/" component={this.home} />
                    <Route path="/two" component={this.two} />
                </Switch>
            </HashRouter>

        )

    }
}
