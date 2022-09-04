import {Common} from "../common";
import {Project} from "../redux/reducers/types/projects";

export async function getAllProjectsAsync() {
    return await Common.getAllProjectAsync();
}

export async function getProjectAsync(id : string) {
    return await Common.getProjectAsync(id);
}

export async function createProjectAsync(project : Project) {
    return await Common.saveProjectAsync(project);
}