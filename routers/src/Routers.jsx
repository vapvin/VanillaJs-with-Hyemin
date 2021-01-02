import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class Routers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact render={()=><div>home</div>} />
                    <Route path="/hello" render={()=> <div>안녕 난 맥이야</div>} />
                    <Route path="/bye" render={()=><div>안녕 난 그램이야</div>}/>
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>

        )
    }
}

export default Routers;