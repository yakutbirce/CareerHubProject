import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainJobs: [],
    jobs: [],
    initialized: false,
    isError: false
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.mainJobs = action.payload
            state.initialized = true;
            state.isError = false;
        },
        setError: (state) => {
            state.initialized = true;
            state.isError = true;
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload)
        },
        filterBySearch: (state, action) => {
            const query = action.payload.toLowerCase();
            // filtreleme işlemini güncelleme /*=== query dediğimde tam eşleşme aradı, bu yüzden include kullandım. */
            const filter = state.mainJobs.filter((job) => job.company.toLowerCase().includes(query))
            state.jobs = filter
        }
    }
})

export const { setJobs, setError, addJob, filterBySearch } = jobSlice.actions;



export default jobSlice.reducer;