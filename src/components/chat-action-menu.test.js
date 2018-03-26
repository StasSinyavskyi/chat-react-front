/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatActionMenu from './chat-action-menu';

// if we have several test we can join them in describe
describe('<ChatActionMenu />', () => {
  const testParam = (
    <ChatActionMenu
      onLiveClick={() => 'onLiveClick'}
      onDeleteClick={() => 'onDeleteClick'}
      activeUser={{ isChatMember: true, isCreator: true }}
      disabled={false}
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
