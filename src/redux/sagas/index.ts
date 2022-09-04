import {takeEvery, all, put, call} from 'redux-saga/effects';
import {PROJECT_ACTIONS} from "../actions/projects";
import {createProjectAsync, getAllProjectsAsync} from "../../api";
import {Project} from "../reducers/types/projects";

function* createProject(action : any) {
    yield call(createProjectAsync, action.payload);
    yield put({type: PROJECT_ACTIONS.CREATE_PROJECT_SUCCESS, payload: action.payload});
}

function* watchCreateProject() {
    yield takeEvery(PROJECT_ACTIONS.CREATE_PROJECT, createProject);
}

function* getAllProjects() {
    const projects : Project[] = yield call(getAllProjectsAsync);
    yield put({type: PROJECT_ACTIONS.GET_ALL_PROJECTS_SUCCESS, payload: projects});
}

function* watchGetAllProjects() {
    yield takeEvery(PROJECT_ACTIONS.GET_ALL_PROJECTS, getAllProjects);
}

export default function* rootSaga() {
    yield all([
        watchCreateProject(),
        watchGetAllProjects()
    ]);
}
