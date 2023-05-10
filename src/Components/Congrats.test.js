import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({adapter:new EnzymeAdapter()});

const defaultProps = {
    success : false
};

//props setup
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>);
}

test('renders without error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.length).toBe(1);
});

test('renders no text when "success prop is false"', ()=>{
    //we need to be particular
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats msg when "success prop is true"', ()=>{
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);
    
});