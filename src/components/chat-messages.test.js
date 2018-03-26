/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessges from './chat-messages';

jest.mock('./message', () => () => 'Message');

// if we have several test we can join them in describe
describe('<ChatMessges />', () => {
  const testParam = (
    <ChatMessges
      activeUser={{ }}
      activeChat={{ }}
      messages={{ }}
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
