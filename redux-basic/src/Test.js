import {useSelector} from 'react-redux';

function Test(){

    const test = useSelector(state => state.test);
    
    return (
        <div>{test}</div>
    )
}

export default Test;