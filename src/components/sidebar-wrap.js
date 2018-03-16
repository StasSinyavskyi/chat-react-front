import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
//import Hidden from 'material-ui/Hidden';

import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';

const Styles = theme =>({
  drawerPaper: {
    //position: 'relative',
    //height: '100%',
    //width: 320,
    //overflow: 'scroll',
    [theme.breakpoints.up('md')]: {
      width: 320,
      position: 'relative',
      height: '100%',
      //backgroundColor: 'red',
    },
  },
  
});



const SidebarWrap =({classes, chats, activeChats,createChat})=>(
  <div>
    <Drawer variant="permanent" open classes={{paper: classes.drawerPaper}}>
      <Sidebar chats={chats} activeChats={activeChats} createChat={createChat}/>

    </Drawer>
    
     
  </div>
);


export default withStyles(Styles)(SidebarWrap);
