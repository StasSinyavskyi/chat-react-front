/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error-message';


// if we have several test we can join them in describe
describe('<ErrorMessage />', () => {
  const err = new Error('Test error');
  const testParam = (
    <ErrorMessage
      clearErrors={() => 'clearErrors'}
      errors={err}
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
