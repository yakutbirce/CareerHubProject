import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainJobs: [],
    jobs: [],
    initialized: false,
    isError: false
};

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.mainJobs = action.payload;
            state.initialized = true;
            state.isError = false;
        },
        setError: (state) => {
            state.initialized = true;
            state.isError = true;
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload);
            state.mainJobs.push(action.payload);
        },
        deleteJob: (state, action) => {
            const jobId = action.payload;
            const updatedJobs = state.mainJobs.filter(job => job.id !== jobId);
            state.mainJobs = updatedJobs;
            state.jobs = updatedJobs;
        },
        editJob: (state, action) => {
            const editedJob = action.payload;
            const index = state.mainJobs.findIndex(job => job.id === editedJob.id);

            if (index !== -1) {
                state.mainJobs[index] = editedJob;
                state.jobs = [...state.mainJobs];
            }
        },
        filterBySearch: (state, action) => {
            const query = action.payload.toLowerCase();
            const filter = state.mainJobs.filter((job) => job.company.toLowerCase().includes(query))
            state.jobs = filter;
        },
        filterByStatus: (state, action) => {
            const filtered = state.mainJobs.filter((job) => job.status === action.payload)
            state.jobs = filtered
        },
        filterByType: (state, action) => {
            state.jobs = state.mainJobs.filter((job) => job.type === action.payload)
        },
        sortJobs: (state, action) => {
            switch (action.payload) {
                case 'A-Z':
                    state.jobs.sort((a, b) => a.company.localeCompare(b.company))
                    break;
                case 'Z-A':
                    state.jobs.sort((a, b) => b.company.localeCompare(a.company))
                    break;
                case 'En Yeni':
                    state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'En Eski':
                    state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date))
                    break;
            }
        },
        clearFilters: (state) => {
            state.jobs = state.mainJobs
        }
    }
});

export const { setJobs, setError, addJob, deleteJob, filterBySearch, filterByStatus, filterByType, sortJobs, clearFilters, editJob } = jobSlice.actions;

export default jobSlice.reducer;