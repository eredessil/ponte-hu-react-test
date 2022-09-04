import {Project} from "./types/projects";
import {PROJECT_ACTIONS} from "../actions/projects";

// generate 20 project with different names and descriptions - only for test purposes
const DEFAULT_STATE : Project[] = [
    ...Array.from({length: 3}, (_, i) => ({
        id: `${i}`,
        name: `Project Title and key ${i}`,
        description: `This is project ${i}`,
        createdAt: "2020-01-01T00:00:00.000Z",
        updatedAt: "2020-01-01T00:00:00.000Z"
    }))
]

function projects(state = DEFAULT_STATE, action : {type: PROJECT_ACTIONS, payload: any}) {
    switch (action.type) {
        case PROJECT_ACTIONS.GET_ALL_PROJECTS_SUCCESS:
            return [
                ...DEFAULT_STATE,
                ...action.payload
            ];

        case PROJECT_ACTIONS.CREATE_PROJECT_SUCCESS:
            return [
                ...state,
                action.payload
            ];

        case PROJECT_ACTIONS.UPDATE_PROJECT_SUCCESS:
            return state.map((projectItem : Project) => {
                if (projectItem.id === action.payload.id) {
                    return action.payload;
                }
                return projectItem;
            });

        case PROJECT_ACTIONS.DELETE_PROJECT_SUCCESS:
            return state.filter((projectItem : Project) => projectItem.id !== action.payload.id);

        default:
            return state;
    }
}

export default projects;