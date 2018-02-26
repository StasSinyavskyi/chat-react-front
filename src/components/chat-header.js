import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';


const Styles = theme =>({
  appBar: {
    position: 'fixed',
    //width: `calc(100% - 320px)`,
    marginLeft: 320,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${320}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});



const Chatheader =({classes})=>(
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={this.handleDrawerToggle}
        className={classes.navIconHide}
        > 
        <MenuIcon />
        </IconButton>
      <Typography variant="title" color="inherit" noWrap>
        My lucky Chat
      </Typography>
    </Toolbar>
  </AppBar>   
);


export default withStyles(Styles)(Chatheader);
