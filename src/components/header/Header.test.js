import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import { findByTestAttr } from '../../../utils/index';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Header component', () => {

  let component;
  beforeEach(() => {
    component = setup();
  })

  it('should render without errors', () => {
    // console.log('header', component.debug());
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);

  })

  it('should render a lgoo', () => {
    const wrapper = findByTestAttr(component, 'logo');
    expect(wrapper.length).toBe(1);
  })
})