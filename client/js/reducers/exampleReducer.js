import exampleActions from '../actions/exampleActions';

export function example(state = {}, action) {
  switch(action.type) {
    case exampleActions.GET_EXAMPLE:
      return action.payload.example;
    default: return state;
  }
}
