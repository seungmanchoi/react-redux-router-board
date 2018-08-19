import {
  FETCH_UPDATE_DATA, FETCH_UPDATE_DATA_SUCCESS, FETCH_UPDATE_DATA_FAILURE,
  UPDATE_BOARD_SUCCESS
} from "../actions/updateAction";

/*
{
          "id": 1,
          "title": "KAIST, 유기반도체 결정크기 10배 성장시키는 기술 개발",
          "content": "KAIST(총장 신성철)가 유기반도체 결정 크기를 10배 성장시켜 성능을 높이는 제어기술을 개발했다. 고성능 유기반도체 상용화를 이루는 기반을 마련했다.",
          "user_name": "소보로",
          "view_count": 0,
          "created_at": "2018-08-02 17:45:03"
      }
* */
const INITIAL_STATE = {
  id: '',
  title: '',
  content: '',
  user_name: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_UPDATE_DATA_SUCCESS:
      return { ...state, ...action.payload.updateData }
    case UPDATE_BOARD_SUCCESS:
      return { ...state }
    default:
      return state;
  }
}
