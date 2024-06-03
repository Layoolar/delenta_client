import { BreadCrumbs } from "./breadcrumbs/initialState";
import { breadCrumbsReducer } from "./breadcrumbs/reducers";


export interface AppState {
    breadCrumbs: BreadCrumbs
}

export const appReducer = {
    breadCrumbs: breadCrumbsReducer
}