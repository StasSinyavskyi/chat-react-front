import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProfile, clearErrors } from '../actions';
import ProfileEdit from '../components/profile-form';
import { recieveAuth } from '../actions/auth';

const mapStateToProps = state => ({
  isUserAuthentificated: state.auth.isUserAuthentificated,
  user: state.auth.user,
  error: state.services.errors.profErr,
});

// short and full version are equal

// shortversion  with binding
const mapDispatchToProps = dispatch => bindActionCreators({
  editProfile, recieveAuth, clearErrors,
}, dispatch);

// full version without binding

// const mapDispatchToProps = dispatsh=>({
//  signup:(username,passwords )=>dispatsh(signup(username,passwords)),
//  login:(username,passwords )=>dispatsh(login(username,passwords))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEdit);
