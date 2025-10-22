import type {UserData} from "../../../store/storeTypes.ts";

export const StorageActions = {
    findData: (username: string): UserData | null => {
        try {
            const data = localStorage.getItem(`user_${username}`);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },

    set: (username: string, data: UserData): void => {
        try {
            localStorage.setItem(`user_${username}`, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }
};
