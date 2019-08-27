import { connect } from 'react-redux';
import App from '../components/App.jsx';

const mapStateToProps = state => {
  return {
    isClicked: state.isClicked
  }
}

export default connect(mapStateToProps)(App);