import React from 'react';

class ClassInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
        }
    }

    getName = e => {
        const {value} = e.target;
        this.setState({username: value});
    }
    
    render(){
        return(
             <>
                <input type="text" name="username" value={this.state.username} onChange={this.getName} />
                <h1>NAME: {this.state.username}</h1>
             </>
        )
    }
}

export default ClassInput;