import { shallow } from 'enzyme';
import Input from './Input';
import {findByTestAttr} from '../test/testUtils';
import React from 'react';

const defaultProps = {secretWord:'party'};

const setup = (props) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
};

describe('Input Component Tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({});
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
    });
});

describe('state controlled input field', ()=>{
    
    test('state updates with value of input box upon change' , ()=>{
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(()=>["", mockSetCurrentGuess]);
        
        let wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = {target: {value: 'train'}};

        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
        
    })
})