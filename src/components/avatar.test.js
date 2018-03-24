/* eslint-env jest */
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar';

// if we have several test we can join them in describe
describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar textforcolorgen="12345">Name Surname</Avatar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly', () => {
    const tree = renderer
      .create(<Avatar textforcolorgen="12345">Name Surname</Avatar>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
