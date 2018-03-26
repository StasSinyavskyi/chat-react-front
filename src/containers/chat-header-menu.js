import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { logout } from '../actions';
import ChatMenu from '../components/chat-menu';
import { editProfile, toProfile, toChat, logout } from '../actions';

const mapStateToProps = state => ({
  isUserAuthentificated: state.auth.isUserAuthentificated,
  isConnected: state.services.isConnected,
});

// short and full version are equal

// shortversion  with binding
const mapDispatchToProps = dispatch => bindActionCreators({
  logout, editProfile, toProfile, toChat,
}, dispatch);

// full version without binding

// const mapDispatchToProps = dispatsh=>({
//  signup:(username,passwords )=>dispatsh(signup(username,passwords)),
//  login:(username,passwords )=>dispatsh(login(username,passwords))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatMenu);
