// Actions
const actionName = 'project-name/folder/name';

// Reducer
export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
};
// Action Creators
export const loadWidgets = () => ({ type: actionName });

// side effects, only as applicable
// e.g. thunks, epics, etc
export const effect = () => {
};
