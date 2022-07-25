export class StorageUtil {

    // Saves the user to localStorage.
    public static storageSave<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    // Reading the user from localStorage.
    public static storageRead<T>(key: string): T | undefined {
        const storedValue = localStorage.getItem(key);
        try {
            if (storedValue) {
                return JSON.parse(storedValue) as T;
            }
            return undefined;
        } catch (e) {
            localStorage.removeItem(key);
            return undefined;
        }
    }

    // Removes the user from localStorage.
    public static storageDelete<T>(key: string) {
        localStorage.removeItem(key);
    }
    
}