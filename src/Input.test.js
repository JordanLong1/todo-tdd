import {shallow} from 'enzyme'; 
import Input from './Input'
describe('make sure input component has form, input, submit button', () => {
    const setUp = () => shallow(<Input />)
     const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

    test('component renders with no error', () => {
        const wrapper = setUp();
        const component = findByTestAttr(wrapper, 'input-component'); 
        expect(component.length).toBe(1);
    }); 

    test('input component contains a form', () => {
        const wrapper = setUp(); 
        expect(wrapper.containsMatchingElement(<form className='input-form'></form>)).toEqual(true);
    }); 

    test('the form contains an input field', () => {
        const wrapper = setUp(); 
        const input = findByTestAttr(wrapper, 'input-field');
        expect(input.length).toBe(1); 
    }); 

    test('has an initial state set to an empty string', () => {

    });

    test('has a submit button', () => {
        // const wrapper = setUp(); 
        // const inputFinder = wrapper.find('.input-form');
        // expect(inputFinder).toContain(<button>Submit</button>);
    }); 

    test('on submit, renders input text onto screen', () => {

    });
})