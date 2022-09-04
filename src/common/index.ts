import {Project} from "../redux/reducers/types/projects";

export class Common {
    /**
     * @return {string} - a random generated id: pattern: xxxx-xxxx-xxxx
     * @private
     */
    private static generateId() : string{
        return `${Math.floor(Math.random() * 100000).toString(36)}-${Math.floor(Math.random() * 100000).toString(36)}-${Math.floor(Math.random() * 100000).toString(36)}`;
    }

    private static getErrorMessage(error: unknown|any) {
        if (error instanceof Error) return error.message
        return String(error)
    }

    public static async saveProjectAsync(item : Project) : Promise<string|boolean> {
        const data = {
            ...item,
            id: item.id || Common.generateId(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(`project:${data.id}`, JSON.stringify(data))
                resolve(true);
            }
            catch (error : unknown) {
                reject(Common.getErrorMessage(error));
            }
        })
    }

    public static async getProjectAsync(key : string) {
        return new Promise((resolve, reject) => {
                const item :  string | null = localStorage.getItem(`project:${key}`);
                if (typeof item === 'string' && item.length > 0) {
                    resolve(JSON.parse(item));
                }

                reject(`Item not found: ${key}`);
        })
    }

    public static async removeProjectAsync(key : string) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.removeItem(`project:${key}`);
                resolve(true);
            }
            catch (error : unknown) {
                reject(Common.getErrorMessage(error));
            }
        })
    }

    public static async clearAsync() {
        return new Promise((resolve, reject) => {
            try {
                localStorage.clear();
                resolve(true);
            }
            catch (error : unknown) {
                reject(Common.getErrorMessage(error));
            }
        })
    }

    public static async getAllProjectAsync() : Promise<Project[]> {
        return new Promise((resolve, reject) => {
            try {
                const data : Project[] = Array.from(Object.keys(localStorage)).reduce((previousValue : [], currentValue: string) : any => {
                    if (currentValue.startsWith('project:')) {
                        const item : string = String(localStorage.getItem(currentValue));
                        if (item.length > 0) {
                            return [...previousValue, JSON.parse(item)]
                        }
                    }
                    return previousValue;
                }, []);

                resolve(data);
            }
            catch (error : unknown) {
                reject(Common.getErrorMessage(error));
            }
        })
    }
}
