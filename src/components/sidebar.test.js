/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';

jest.mock('./new-chat-button', () => () => 'NewChatButton');

// if we have several test we can join them in describe
describe('<Sidebar />', () => {
  const testParam = (
    <Sidebar
      createChat={() => 'createChat'}
      chats={{ active: {}, my: [], all: [] }}
      activeChat={{ }}
      isConnected
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
