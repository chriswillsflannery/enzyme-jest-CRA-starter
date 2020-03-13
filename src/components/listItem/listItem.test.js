import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils';
import ListItem from './index';

describe('List item component', () => {

  describe('check prop types', () => {
    it('should not throw awarning', () => {
      const expectedProps = {
        title: 'example titel',
        desc: 'some desc text'
      }
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    })
  })

  describe('commponent renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "title",
        desc: 'desc'
      }
      wrapper = shallow(<ListItem {...props} />);
    })

    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a descrition', () => {
      const description = findByTestAttr(wrapper, 'componentDescription');
      expect(description.length).toBe(1);
    })
  })

  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'desc'
      }
      wrapper = shallow(<ListItem {...props} />);
    })

    it('component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    })

  })


})