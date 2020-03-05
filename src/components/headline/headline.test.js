import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {

  describe('check prop types', () => {

    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'testheader',
        desc: 'test desc',
        tempArray: [{
          fname: 'test name',
          lName: 'test lname',
          email: 'test@email.com',
          age: 25,
          onlineStatus: false,
        }]
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined();
    });
  })

  describe('have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'testheader',
        desc: 'test desc',
        tempArray: [{
          fname: 'test name',
          lName: 'test lname',
          email: 'test@email.com',
          age: 10,
          onlineStatus: false,
        }]
      }
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('should render an h1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

  })

  describe('have No props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    })
  })

})