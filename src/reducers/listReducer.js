import {
  FETCH, FETCH_SUCCESS, FETCH_FAILURE
} from "../actions/listAction";

const INITIAL_STATE = {
  loading: false,
  error: false,
  list: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true, error: false }
    case FETCH_SUCCESS:
      return { ...state, loading: false, list: action.payload.list, error: false }
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state;
  }
}
