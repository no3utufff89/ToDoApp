import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserState} from "../storeTypes.ts";
import {StorageActions} from "../../react/scripts/helpers/storageActions.ts";
import type {Task} from "../../types.ts";

const initialState: UserState = {
    loading: false,
    user: null,
    data: null,
};

const usersSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<{ login: string }>) => {
            const user = action.payload.login;
            const data = StorageActions.findData(user);
            if (data) {
                state.data = data;
            } else {
                // Создаем новую структуру данных для нового пользователя
                state.data = { tasks: [] };
            }
            state.user = user;
        },

        logOut: (state) => {
            state.user = null;
            state.data = null;
        },

        addTask: (state, action: PayloadAction<Task>) => {
            state.loading = true;

            // Проверяем и инициализируем data если нужно
            if (!state.data) {
                state.data = { tasks: [] };
            }

            // Добавляем задачу в массив tasks
            state.data.tasks.push(action.payload);

            // Сохраняем в localStorage
            if (state.user && state.data) {
                StorageActions.set(state.user, state.data);
            }

            state.loading = false;
        },

        updateTask: (state, action: PayloadAction<Task>) => {
            if (state.data?.tasks) {
                const index = state.data.tasks.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.data.tasks[index] = action.payload;
                    if (state.user) {
                        StorageActions.set(state.user, state.data);
                    }
                }

            }
        },

        deleteTask: (state, action: PayloadAction<{ taskId: string }>) => {
            console.log(`idd`,typeof  action.payload)
            if (state.data) {
                state.data.tasks = state.data.tasks.filter(task => task.id !== action.payload.taskId);

                // Сохраняем в localStorage
                if (state.user) {
                    StorageActions.set(state.user, state.data);
                }
            }
        },

        toggleTask: (state, action: PayloadAction<{ taskId: string }>) => {
            if (state.data) {
                const task = state.data.tasks.find(task => task.id === action.payload.taskId);
                if (task) {
                    task.completed = !task.completed;

                    // Сохраняем в localStorage
                    if (state.user) {
                        StorageActions.set(state.user, state.data);
                    }
                }
            }
        },
    },
});

export const {
    login,
    logOut,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
} = usersSlice.actions;

export default usersSlice.reducer;