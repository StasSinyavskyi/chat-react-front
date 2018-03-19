import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
//import Hidden from 'material-ui/Hidden';

import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';

const Styles = theme =>({
  
  
});



const SidebarWrap =({classes, chats, activeChats,createChat,isConnected})=>(
  <div>
    <Drawer variant="permanent" open classes={{paper: classes.drawerPaper}}>
      <Sidebar chats={chats} activeChats={activeChats} createChat={createChat} isConnected={isConnected}/>

    </Drawer>
    
     
  </div>
);


export default withStyles(Styles)(SidebarWrap);
