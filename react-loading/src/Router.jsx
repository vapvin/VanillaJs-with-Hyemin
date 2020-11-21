import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Loading from './Loading';
import LoadingText from './LoadingText';

export default class FirstRouter extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <h1>Hello</h1>} />
                    <Route path="/loading" component={Loading} />
                    <Route path="/loadingtext" component={LoadingText} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        )
    }
}