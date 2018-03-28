/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import MessageInput from './message-input';

// if we have several test we can join them in describe
describe('<MessageInput />', () => {
  const testParam = (
    <MessageInput
      onJoinButtonClick={() => 'onJoinButtonClick'}
      sendMessage={() => 'sendMessage'}
      showJoinButton={false}
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

  // test2
  const testParam2 = (
    <MessageInput
      onJoinButtonClick={() => 'onJoinButtonClick'}
      sendMessage={() => 'sendMessage'}
      showJoinButton
      disabled={false}
    />
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(testParam2, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('render correctly', () => {
    const tree = renderer
      .create(testParam2)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
