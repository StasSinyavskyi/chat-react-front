/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message';

jest.mock('./avatar', () => () => 'Avatar');

// if we have several test we can join them in describe
describe('<Message />', () => {
  const testParam = (
    <Message
      activeUser={{ _id: '123' }}
      sender={{ _id: '123', firstName: 'Test', lastName: 'Test' }}
      content="Test message"
      createdAt=""
      statusMessage={false}
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


  // test 2

  const testParam2 = (
    <Message
      activeUser={{ _id: '123' }}
      sender={{ _id: '123', firstName: 'Test', lastName: 'Test' }}
      content="Test message"
      createdAt=""
      statusMessage
    />
  );

  it('renders without crashing 2', () => {
    const div = document.createElement('div');
    ReactDOM.render(testParam2, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly 2', () => {
    const tree = renderer
      .create(testParam2)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
