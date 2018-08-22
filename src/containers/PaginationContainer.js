import { connect } from 'react-redux';
//import { fetchBoardIndex } from './../actions/boardListAction';
import { FETCH_SUCCESS } from '../actions/listAction';
import Pagination from './../components/Pagination';
import { getBoardList } from "../utils/httpRequest";

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoardList: async ({ pageNum, pageSize }) => {

      const result = await getBoardList({ pageNum, pageSize });
      const { list, page_num, page_size, totalCount} = result.data.response;
      const success = result.data.success;

      if (success) {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            list, page_num, page_size, totalCount
          }
        })
      }

      //dispatch(fetchBoardIndex(query));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);