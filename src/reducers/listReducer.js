import {
  FETCH, FETCH_SUCCESS, FETCH_FAILURE
} from "../actions/listAction";

const INITIAL_STATE = {
  // pagination: {
  //
  // },
  pageNum: 1,
  totalCount: 0,
  totalPage: 0,
  pageSize: 5,
  blockCountPerPage: 5,
  loading: false,
  error: false,
  list: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true, error: false }
    case FETCH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        error: false,
        pageNum: action.payload.page_num,
        totalCount: action.payload.totalCount,
        pageSize: action.payload.page_size,
        // paginate: {
        //   ...state.pagination,
        //
        // }
      }
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state;
  }
}
