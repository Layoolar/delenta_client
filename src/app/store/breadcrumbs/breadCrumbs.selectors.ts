import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreadCrumbs } from './initialState';

const getBreadCrumbsState = createFeatureSelector<BreadCrumbs>("breadCrumbs");

export const getBreadCrumb = createSelector(getBreadCrumbsState, (breadCrumbs) => {
  return breadCrumbs;
});