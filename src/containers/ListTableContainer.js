import { connect } from 'react-redux';
import ListTable from '../components/ListTable';
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/listAction";
import axios from 'axios';
import { getBoardList } from "../utils/httpRequest";
// import dotenv from 'dotenv';

//const { SERVER_HOST='127.0.0.1', SERVER_PORT='8800' } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = '8800';

const mapStateToProps = (state) => {
  return {
    listData: state.listData,
    router: state.router
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListData: async () => {
      dispatch({
        type: FETCH
      });

      try {
        const result = await getBoardList();
        const list = result.data.response.list;
        const success = result.data.success;

        if(success) {
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              list
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

        dispatch({
          type: FETCH_FAILURE,
          payload: {
            error: response
          }
        })
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);