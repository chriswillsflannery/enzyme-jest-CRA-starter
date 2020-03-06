import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import SharedButton from './index';

describe('sharedbutton componet', () => {
  describe('checking proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }
      const propsErrors = checkProps(SharedButton, expectedProps);
      expect(propsErrors).toBeUndefined();
    })

  })

  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example button text',
        emitEvent: () => {

        }
      }
      wrapper = shallow(<SharedButton {...props} />);
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    })

  })

})