/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import NewChatButton from './new-chat-button';


// if we have several test we can join them in describe
describe('<NewChatButton />', () => {
  const testParam = (
    <NewChatButton
      onClick={() => 'onClick'}
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
