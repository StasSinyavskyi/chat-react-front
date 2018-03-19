import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup, login,clearErrors} from '../actions';
//import {clearErrors} from '../services';
import WelcomePage from '../components/welcome-page'

const mapStateToProps = state =>({
  isUserAuthentificated: state.auth.isUserAuthentificated,
  error:state.services.errors.authErr,
});

//short and full version are equal

//shortversion  with binding
const mapDispatchToProps = dispatch=>bindActionCreators({
  signup,
  login,
  clearErrors,
},dispatch)

//full version without binding

//const mapDispatchToProps = dispatsh=>({
//  signup:(username,passwords )=>dispatsh(signup(username,passwords)),
//  login:(username,passwords )=>dispatsh(login(username,passwords))
//})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
