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


})