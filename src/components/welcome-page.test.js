/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './welcome-page';

jest.mock('./login-form', () => () => 'LoginForm');
jest.mock('./signup-form', () => () => 'SignupForm');
jest.mock('./error-message', () => () => 'ErrorMessage');

// if we have several test we can join them in describe
describe('<WelcomePage />', () => {
  const testParam = (
    <WelcomePage
      signup={() => 'signup'}
      login={() => 'login'}
      clearErrors={() => 'clearErrors'}
      recieveAuth={() => 'recieveAuth'}
      isUserAuthentificated={false}
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
