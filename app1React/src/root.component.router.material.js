import React from 'react';
import Counter from './counter';
import reactLogo from '../assets/react-logo.png'
import Routes from "./routes";

export default class Root extends React.Component {


    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        return (

            <Routes />

        )

    }
}
