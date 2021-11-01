// Actions
const actionName = 'project-name/folder/name';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}
// Action Creators
export function loadWidgets() {
  return { type: actionName };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function effect() {
}