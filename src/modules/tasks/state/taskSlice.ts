import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [
        { id: '1', title: 'Initial Task', completed: false },
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        toggleTask(state, action: PayloadAction<string>) {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { addTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
