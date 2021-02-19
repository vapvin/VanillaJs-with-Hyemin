import {counterSagaFunction} from './counter';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([counterSagaFunction()]);
}