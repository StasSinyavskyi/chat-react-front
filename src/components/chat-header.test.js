/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeader from './chat-header';

jest.mock('./chat-action-menu', () => () => 'ChatActionMenu');
jest.mock('../containers/chat-header-menu', () => () => 'ChatHeaderMenu');
jest.mock('./avatar', () => () => 'Avatar');

// if we have several test we can join them in describe
describe('<ChatHeader />', () => {
  const testParam = (
    <ChatHeader
      liveChat={() => 'liveChat'}
      deleteChat={() => 'deleteChat'}
      activeUser={{ }}
      activeChat={{ }}
      disabled={false}
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
