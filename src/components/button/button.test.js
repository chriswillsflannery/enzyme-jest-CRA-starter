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
    let mockFunction;
    beforeEach(() => {
      mockFunction = jest.fn();
      const props = {
        buttonText: 'Example button text',
        emitEvent: mockFunction
      }
      wrapper = shallow(<SharedButton {...props} />);
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    })

    it('should emit callback on click event', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunction.mock.calls.length;
      expect(callback).toBe(1);
    })

  })

})