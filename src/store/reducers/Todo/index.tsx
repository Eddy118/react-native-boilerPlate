import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../../../shared/types.tsx';

interface PokemonState {
    todoList: TodoType;
}

const initialState: PokemonState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todoList = [...state.todoList, action.payload]
        }
    },
});

export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;