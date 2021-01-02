import React from 'react';

class LoadingText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loadingText : true,
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({
            loadingText : false
        }), 3000);
    }

    render(){
        return(
            <>
                {
                    this.state.loadingText ? <div>hello</div> : <div>bye</div> 
                }
            </>
        )
    }
}

export default LoadingText;