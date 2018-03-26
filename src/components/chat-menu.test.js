/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from './chat-menu';

// if we have several test we can join them in describe
describe('<ChatMenu />', () => {
  const testParam = (
    <ChatMenu
      toChat={() => 'toChat'}
      toProfile={() => 'toProfile'}
      logout={() => 'logout'}
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
