import React from 'react';

class ClassClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};  
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setTimes(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    setTimes(){
        this.setState({
            date: new Date(),
        });
    }
    
    render(){
       
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}

export default ClassClock;