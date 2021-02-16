const PLUSE = 'counter/INCREASE';
const MINUS = 'counter/DECREASE';


export const plus = () => ({ type: PLUSE });
export const minus = () => ({ type: MINUS });

const initialState = {
    count: 0,
  };
  
export default function counter(state = initialState, action) {
    switch (action.type) {
      case PLUSE:
        return {
          ...state,
          count: state.count + 1
        };
      case MINUS:
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  }