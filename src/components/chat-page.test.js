/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from './chat-page';

jest.mock('./sidebar-wrap', () => () => 'SidebarWrap');
jest.mock('./chat-header', () => () => 'Chatheader');
jest.mock('./chat', () => () => 'Chat');
jest.mock('./error-message', () => () => 'ErrorMessage');

// if we have several test we can join them in describe
describe('<ChatPage />', () => {
  const testParam = (
    <ChatPage
      fetchAllChats={() => 'fetchAllChats'}
      fetchMyChats={() => 'fetchMyChats'}
      setActiveChat={() => 'setActiveChat'}
      socketsConnect={() => 'socketsConnect'}
      mountchat={() => 'mountchat'}
      unmountchat={() => 'unmountchat'}
      match={{ params: { chatId: '123' } }}
      active={{ }}
      chats={{ active: {}, my: [], all: [] }}
    />
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testParam, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly', () => {
    const tree = renderer
      .create(testParam)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
