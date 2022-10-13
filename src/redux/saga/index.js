import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '~/api';
import { actions } from '~/redux/reducers/jobSlice';

function* fetchAllJobsSaga() {
    try {
        const { data } = yield call(api.fetchAllJobs);
        console.log(data);
        yield put(actions.getAllJobsSuccess(data));
    } catch (error) {
        yield put(actions.getAllJobsFailure(error));
    }
}

function* fetchSearchJobsSaga(action) {
    try {
        const { data } = yield call(api.fetchSearchJobs, action.payload);
        yield put(actions.getJobsSuccess(data));
    } catch (error) {
        yield put(actions.getJobsFailure(error));
    }
}

function* fetchJobsSaga(action) {
    try {
        const { data } = yield call(api.fetchJobs, action.payload);
        yield put(actions.getJobsSuccess(data));
    } catch (error) {
        yield put(actions.getJobsFailure(error));
    }
}

function* rootSaga() {
    yield takeLatest(actions.getJobsRequest, fetchJobsSaga);
    yield takeLatest(actions.getAllJobsRequest, fetchAllJobsSaga);
    yield takeLatest(actions.getSearchJobsRequest, fetchSearchJobsSaga);
}

export default rootSaga;
