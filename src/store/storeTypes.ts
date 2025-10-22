import type {Task} from "../types.ts";

export interface UserData {
    tasks: Task[];
}

export interface UserState {
    loading: boolean;
    user: string | null;
    data: UserData | null;
}
export interface SettingsState {
    isModalOpen: boolean;
}