/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat';

jest.mock('./chat-messages', () => () => 'ChatMessages');
jest.mock('./message-input', () => () => 'MessageInput');

// if we have several test we can join them in describe
describe('<Chat />', () => {
  const testParam = (
    <Chat
      sendMessage={() => 'sendMessage'}
      joinChat={() => 'joinChat'}
      match={{ params: { chatId: '123' } }}
      activeChat={{ _id: '123' }}
      messages={{ }}
      activeUser={{ isMember: true, isCreator: true, isChatMember: true }}
      isConnected={false}
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
