import { connect } from 'react-redux';
import ListTable from '../components/ListTable';
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/listAction";
import axios from 'axios';
import { getBoardList } from "../utils/httpRequest";
// import dotenv from 'dotenv';

//const { SERVER_HOST='127.0.0.1', SERVER_PORT='8800' } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = '8800';

const mapStateToProps = (state, ownProps) => {
  return {
    listData: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListData: async ({ pageNum, pageSize }) => {
      dispatch({
        type: FETCH
      });

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

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);