import { put, delay, takeEvery, takeLatest } from 'redux-saga/effects';

const PLUS = "PLUS";
const MINUS = "MINUS";
const PLUS_SAGA = "PLUS_SAGA";
const MINUS_SAGA = "MINUS_SAGA";

export const increase = () => ({
    type: PLUS
});

export const decrease = () => ({
    type: MINUS
});

export const increaseSagaExample = () => ({
    type: PLUS_SAGA
});

export const decreaseSagaExample = () => ({
    type: MINUS_SAGA
});

function* increaseSagaFunction(){
    yield delay(1000);
    yield put(increase());
}

function* decreaseSagaFunction(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSagaFunction(){
    yield takeEvery(PLUS_SAGA, increaseSagaFunction);
    yield takeLatest(MINUS_SAGA, decreaseSagaFunction);
}

const initialState = 0;

function counter(state = initialState, action){
    switch(action.type){
        case PLUS:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
}

export default counter;