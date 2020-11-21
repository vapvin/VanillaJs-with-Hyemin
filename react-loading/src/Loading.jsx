import React from 'react';

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading :true,
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({
            loading: false
        }), 5000);
    }
    
    render(){

        return(
            <>
            {
                this.state.loading ? <div>로딩중</div> : <div>로딩끝</div>
            }
            </>
        )
    }
}

export default Loading;