import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AuthActions } from './Actions';
import { apiCall, api } from './config';



function* loginToAccount(){
    try{

        yield put({type : AuthActions.LOGIN_FETCHING_ACCOUNT});

        const res = yield call(apiCall, 'post', api, 'user');

        if(!res) {
            yield put({type: AuthActions.LOGIN_TO_WEBSITE_FAIILED, error : res.errors[0].message})
        }

        else {
            yield put({type : AuthActions.LOGIN_TO_WEBSITE_SUCCESS, user : res.data})
        }

    } catch(e) {
        throw new Error(e); 
    }
}

function* watchFetchLabTests(){
    yield takeEvery(AuthActions.USER_ASK_LOGIN_TO_WEBSITE, loginToAccount)
}

function* LabTestsListingSaga(){
    yield all([fork(watchFetchLabTests)])
}

export default LabTestsListingSaga