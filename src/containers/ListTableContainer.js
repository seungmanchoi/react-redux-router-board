import { connect } from 'react-redux';
import ListTable from '../components/ListTable';

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch();
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);