/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import SidebarWrap from './sidebar-wrap';

jest.mock('./sidebar', () => () => 'Sidebar');

// if we have several test we can join them in describe
describe('<SidebarWrap />', () => {
  const testParam = (
    <SidebarWrap
      createChat={() => 'createChat'}
      chats={{ active: {}, my: [], all: [] }}
      activeChats={{ }}
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
