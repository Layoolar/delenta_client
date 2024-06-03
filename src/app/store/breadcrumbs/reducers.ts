import { Action, createReducer, on } from "@ngrx/store";
import { getBreadCrumbs, setBreadCrumbs } from "./actions";

import { initialState } from "./initialState";

const _breadCrumbsReducer = createReducer(initialState,
    on(getBreadCrumbs, (state) => {
        return {
            ...state
        };
    }),
    on(setBreadCrumbs, (state, action) => {
        return {
            ...state, breadcrumbs: action.breadCrumbs
        };
    }),
  
  );
  export function breadCrumbsReducer(state: any, action: Action) {
    return _breadCrumbsReducer(state, action);
  }