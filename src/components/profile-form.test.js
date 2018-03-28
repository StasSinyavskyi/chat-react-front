/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from './profile-form';


jest.mock('./chat-header', () => () => 'Chatheader');
jest.mock('./error-message', () => () => 'ErrorMessage');

// if we have several test we can join them in describe
describe('<ProfileForm />', () => {
  const testParam = (
    <ProfileForm
      recieveAuth={() => 'recieveAuth'}
      editProfile={() => 'editProfile'}
      clearErrors={() => 'clearErrors'}
      errors={new Error('Test error')}
      user={{ isMember: false, isCreator: true, isChatMember: true }}
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
