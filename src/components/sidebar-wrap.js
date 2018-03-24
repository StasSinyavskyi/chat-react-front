import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Hidden from 'material-ui/Hidden';

import Drawer from 'material-ui/Drawer';

import Sidebar from './sidebar';

const Styles = ({


});


const SidebarWrap = ({
  classes, chats, activeChats, createChat, isConnected,
}) => (
  <div>
    <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper }}>
      <Sidebar
        chats={chats}
        activeChats={activeChats}
        createChat={createChat}
        isConnected={isConnected}
      />

    </Drawer>


  </div>
);

SidebarWrap.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.shape({
    active: PropTypes.object,
    my: PropTypes.array.isRequired,
    all: PropTypes.array.isRequired,
  }).isRequired,
  activeChats: PropTypes.objectOf(PropTypes.object).isRequired,
  createChat: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default withStyles(Styles)(SidebarWrap);
