import {Project} from "../reducers/types/projects";

export enum PROJECT_ACTIONS {
    GET_ALL_PROJECTS = 'GET_ALL_PROJECTS',
    GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS',
    GET_ALL_PROJECTS_ERROR = 'GET_ALL_PROJECTS_ERROR',
    CREATE_PROJECT = 'CREATE_PROJECT',
    CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR',
    UPDATE_PROJECT = 'UPDATE_PROJECT',
    UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS',
    UPDATE_PROJECT_ERROR = 'UPDATE_PROJECT_ERROR',
    DELETE_PROJECT = 'DELETE_PROJECT',
    DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS',
    DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR',
}

export function createProject(project: {name: string; description: string; employees: object[], documents : object }) {
    return {
        type: PROJECT_ACTIONS.CREATE_PROJECT,
        payload: project
    }
}

export function createProjectSuccess(project: Project) {
    return {
        type: PROJECT_ACTIONS.CREATE_PROJECT_SUCCESS,
        payload: project
    }
}

export function createProjectError(error: any) {
    return {
        type: PROJECT_ACTIONS.CREATE_PROJECT_ERROR,
        payload: error
    }
}

export function getAllProject() {
    return {
        type: PROJECT_ACTIONS.GET_ALL_PROJECTS,
    }
}

export function getAllProjectSuccess(projects: Project[]) {
    return {
        type: PROJECT_ACTIONS.GET_ALL_PROJECTS_SUCCESS,
        payload: projects
    }
}

export function getAllProjectError(error: any) {
    return {
        type: PROJECT_ACTIONS.GET_ALL_PROJECTS_ERROR,
        payload: error
    }
}

export function updateProject(project: Project) {
    return {
        type: PROJECT_ACTIONS.UPDATE_PROJECT,
        payload: project
    }
}

export function updateProjectSuccess(project: Project) {
    return {
        type: PROJECT_ACTIONS.UPDATE_PROJECT_SUCCESS,
        payload: project
    }
}

export function updateProjectError(error: any) {
    return {
        type: PROJECT_ACTIONS.UPDATE_PROJECT_ERROR,
        payload: error
    }
}

export function deleteProject(id: string) {
    return {
        type: PROJECT_ACTIONS.DELETE_PROJECT,
        payload: id
    }
}

export function deleteProjectSuccess(id: string) {
    return {
        type: PROJECT_ACTIONS.DELETE_PROJECT_SUCCESS,
        payload: id
    }
}

export function deleteProjectError(error: any) {
    return {
        type: PROJECT_ACTIONS.DELETE_PROJECT_ERROR,
        payload: error
    }
}
