import { connect } from 'react-redux';
//import { fetchBoardIndex } from './../actions/boardListAction';
import { FETCH_SUCCESS } from '../actions/listAction';
import Pagination from './../components/Pagination';
import { getBoardList } from "../utils/httpRequest";

const mapStateToProps = (state) => {
  return {
    // paginate: state.paginate,
    // query: state.query
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoardList: async ({ pageNum }) => {

      const result = await getBoardList({ pageNum });
      const success = result.data.success;
      const list = result.data.response.list;

      if (success) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            list
          }
        })
      }

      //dispatch(fetchBoardIndex(query));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);