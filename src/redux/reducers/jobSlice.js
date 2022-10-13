import { createSlice } from '@reduxjs/toolkit';

import { INIT_STATE } from '~/redux/constant';

export const jobSlice = createSlice({
    name: 'job',
    initialState: INIT_STATE.jobs,
    reducers: {
        getJobsRequest: (state) => {
            state.isLoading = true;
        },
        getJobsSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getJobsFailure: (state, action) => {
            state.isLoading = false;
        },
        getAllJobsRequest: (state) => {
            state.isLoading = true;
        },
        getAllJobsSuccess: (state, action) => {
            state.isLoading = false;
            state.allData = action.payload;
        },
        getAllJobsFailure: (state, action) => {
            state.isLoading = false;
        },
        getSearchJobsRequest: (state) => {
            state.isLoading = true;
        },
        getSearchJobsSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getSearchJobsFailure: (state, action) => {
            state.isLoading = false;
        },
    },
});

export const actions = jobSlice.actions;

export default jobSlice.reducer;
