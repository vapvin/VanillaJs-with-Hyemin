// Action Typec 선택사항
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

// Action Creator
export const plus = () => ({type: PLUS});
export const minus = () => ({type: MINUS});

// inital state
const initalState = {
    count: 0,
    test: "대기중"
};

// Reducer 순수함수 => input이 있으면 output이 무조건 있어야함
export default function counter(state = initalState, action){
    switch(action.type){
        case PLUS:
            return {
                ...state,
                count: state.count + 1,
                test: "더하는 중"
            };
        case MINUS:
            return {
                ...state,
                count: state.count - 1,
                test: "감소하는 중"
            };
        default:
            return state;
    }
}