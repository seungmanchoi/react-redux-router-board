import { connect } from 'react-redux';
import View from '../components/View';
import {
  FETCH_VIEW, FETCH_VIEW_SUCCESS,
  UPDATE_VIEW_COUNT, UPDATE_VIEW_COUNT_SUCCESS
} from "../actions/viewAction";
import axios from 'axios';
import { getBoard } from "../utils/httpRequest";


//.dotenv 적용


const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = '8800';

const mapStateToProps = (state) => {
  return {
    view: state.view,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getViewData: async (id) => {
      try {
        const result = await getBoard(id);
        const viewData = result.data.response;

        dispatch({
          type: FETCH_VIEW_SUCCESS,
          payload: {
            viewData
          }
        });

      } catch (e) {
        console.error('error!');
      }
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