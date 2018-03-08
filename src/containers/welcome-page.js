import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup, login} from '../actions';
import WelcomePage from '../components/welcome-page'

const mapStateToProps = state =>({
  isUserAuthentificated: state.auth.isUserAuthentificated,
});

//short and full version are equal

//shortversion  with binding
const mapDispatchToProps = dispatsh=>bindActionCreators({
  signup,
  login,
},dispatsh)

//full version without binding

//const mapDispatchToProps = dispatsh=>({
//  signup:(username,passwords )=>dispatsh(signup(username,passwords)),
//  login:(username,passwords )=>dispatsh(login(username,passwords))
//})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);
