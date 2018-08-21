import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import updateReducer from './updateReducer';
import listReducer from './listReducer';
import viewReducer from './viewReducer';


const rootReducer = combineReducers({
  router,
  list: listReducer,
  view: viewReducer,
  update: updateReducer,
  // listPage: listReducer,
  // viewPage: viewReducer,
});

export default rootReducer;
