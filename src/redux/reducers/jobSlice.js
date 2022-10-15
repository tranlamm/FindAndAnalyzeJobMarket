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
            state.analyzeLoading = true;
        },
        getAllJobsSuccess: (state, action) => {
            state.analyzeLoading = false;
            state.allData = action.payload;
        },
        getAllJobsFailure: (state, action) => {
            state.analyzeLoading = false;
        },
        getAllItRequest: (state) => {
            state.itLoading = true;
        },
        getAllItSuccess: (state, action) => {
            state.itLoading = false;
            state.itData = action.payload;
        },
        getAllItFailure: (state, action) => {
            state.itLoading = false;
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
