export interface User {
    login: string;
}
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    createdAt: string;
}
export interface RadioOption {
    value: string;
    label: string;
}