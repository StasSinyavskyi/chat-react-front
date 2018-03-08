import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route,Redirect,withRouter} from 'react-router-dom';

import {receiveAuth} from '../actions';

class PrivateRout extends  React.Component {
  componentDidMount(){
    this.props.receiveAuth();
  }

  render(){
    const {component: Component, isUserAuthentificated, ...rest}=this.props;

    return(
      <Route {...rest} render={props=>(
        isUserAuthentificated ? (
          
          <Component {...props} />
        ):(
          <Redirect to={{pathname:'/welcome',state:{from:props.location}}} />
        )
      )}
      //<Redirect to={{pathname:'/welcome',state:{from:props.location}}} />
      />
      
    )
  }

}

const mapStateToProps = state =>({
  isUserAuthentificated : state.auth.isUserAuthentificated,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  receiveAuth
},dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRout));
