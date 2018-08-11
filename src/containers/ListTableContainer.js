import { connect } from 'react-redux';
import ListTable from '../components/ListTable';
import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/listAction";
import axios from 'axios';
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
    getListData: () => {
      dispatch({
        type: FETCH
      });

      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
        .then((result) => {
          const list = result.data.response.list;
          const success = result.data.success;

          console.log(success);

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

        })
        .catch((response) => {
          dispatch({
            type: FETCH_FAILURE,
            payload: {
              error: response
            }
          })
        });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);