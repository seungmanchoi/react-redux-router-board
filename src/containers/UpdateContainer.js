import { connect } from 'react-redux';
import Update from '../components/Update';
import {
  FETCH_UPDATE_DATA, FETCH_UPDATE_DATA_SUCCESS, FETCH_UPDATE_DATA_FAILURE,
  UPDATE_BOARD_SUCCESS
} from "../actions/updateAction";
import { getBoard, updateBoard } from '../utils/httpRequest';

const mapStateToProps = (state) => {
  return {
    update: state.update,
    router: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: async (id) => {
      try {
        const result = await getBoard(id);
        const updateData = result.data.response; // {}

        dispatch({
          type: FETCH_UPDATE_DATA_SUCCESS,
          payload: {
            updateData: updateData
          }
        });

      } catch(e) {
        console.error('error!');
      }
    },
    updateBoard: async ({id, title, content}) => {
      try {
        const result = await updateBoard({id, title, content});
        const success = result.data.success;

        if(success) {
          dispatch({
            type: UPDATE_BOARD_SUCCESS,
            payload: {
              updated: true
            }
          })
        }
      } catch(e) {
        console.error('error!', e);
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);