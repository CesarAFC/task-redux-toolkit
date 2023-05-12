import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/task/taskSlice';
import darkReducer from '../features/task/darmodeSlice';


export const store = configureStore({
    reducer: {
        task: tasksReducer,
        darkmode: darkReducer,
    },
})
