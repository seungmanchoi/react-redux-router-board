import { connect } from 'react-redux';
import View from '../components/View';
import {
  FETCH_VIEW, FETCH_VIEW_SUCCESS,
  UPDATE_VIEW_COUNT, UPDATE_VIEW_COUNT_SUCCESS
} from "../actions/viewAction";
import axios from 'axios';



//.dotenv 적용


const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = '8800';

const mapStateToProps = (state) => {
  return {
    view: state.view,
    router: state.router
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getViewData: (id) => {
      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
        .then((result) => {

          const viewData = result.data.response;
          dispatch({
            type: FETCH_VIEW_SUCCESS,
            payload: {
              viewData
            }
          });
        });
    },
    updateViewCount: (id) => {
      const storageId = localStorage.getItem('view_id');

      if(storageId !== id) {
        localStorage.setItem('view_id', id);
        axios.put(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}/count`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
          .then((result) => {
            dispatch({
              type: UPDATE_VIEW_COUNT_SUCCESS,
              payload: {
                id
              }
            });
          });
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);