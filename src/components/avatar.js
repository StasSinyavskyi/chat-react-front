import React, { Component } from 'react';
//import Classnames from 'classnames';
//import { withStyles } from 'material-ui/styles';
import MuiAvatar from 'material-ui/Avatar';
import getColor from '../utils/color-from';
import AvatarText from '../utils/avatar-text';

const Avatar =({textforcolorgen, children, ...rest}) => (
  <MuiAvatar style={{backgroundColor : getColor(textforcolorgen)}} {...rest}>
    {AvatarText(children)}
  </MuiAvatar>
)


export default Avatar;
