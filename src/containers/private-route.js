import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { recieveAuth } from '../actions';

class PrivateRout extends React.Component {
  static propTypes={
    recieveAuth: PropTypes.func.isRequired,
    component: PropTypes.objectOf(PropTypes.string).isRequired,
    isUserAuthentificated: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.recieveAuth();
  }

  render() {
    const { component: Component, isUserAuthentificated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (
        isUserAuthentificated ? (

          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/welcome', state: { from: props.location } }} />
        )
      )}
      // <Redirect to={{pathname:'/welcome',state:{from:props.location}}} />
      />

    );
  }
}

const mapStateToProps = state => ({
  isUserAuthentificated: state.auth.isUserAuthentificated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  recieveAuth,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRout));
