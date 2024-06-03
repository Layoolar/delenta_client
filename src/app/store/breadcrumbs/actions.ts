import { createAction, props } from "@ngrx/store";
export const getBreadCrumbs = createAction("getBreadCrumbs");
export const setBreadCrumbs = createAction("setBreadCrumbs", props<{breadCrumbs: any[]}>());