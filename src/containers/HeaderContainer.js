import { connect } from 'react-redux';
import Header from './../components/Header';
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/listAction";
import { getBoardList } from "../utils/httpRequest";

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListData: async ({ pageNum, pageSize, ordering, sort, searchCondition, searchValue }) => {
      dispatch({
        type: FETCH
      });

      console.log('getListData');

      try {
        //const pageNum
        const result = await getBoardList({ pageNum, pageSize });
        const { list, page_num, page_size, totalCount} = result.data.response;
        const success = result.data.success;

        if(success) {
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              list, page_num, page_size, totalCount
            }
          });
        } else {
          dispatch({
            type: FETCH_FAILURE,
            payload: {
              error: {
                message: result.msg
              }
            }
          })
        }
      } catch(e) {
        //e data 확인
        console.error('error');

        dispatch({
          type: FETCH_FAILURE,
          payload: {
            error: e
          }
        })
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);