import React from 'react';

class ClassClock extends React.Component {

    constructor(props){
        super(props);
        this.state = { data: new Date()};
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
        const {date: {toLocaleTimeString}} = this.state;
        return (
            <h1>{toLocaleTimeString()}</h1>
        )
    }
}

export default ClassClock;