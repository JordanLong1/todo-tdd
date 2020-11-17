import {shallow} from 'enzyme'; 
import Input from './Input'
import ListToDos from './ListToDos';
describe('make sure input component has form, input, submit button', () => {
    const setUp = () => shallow(<Input />);
     const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
    const initialState = {inputText: ''};


    test('component renders with no error', () => {
        const wrapper = setUp();
        const component = findByTestAttr(wrapper, 'input-component'); 
        expect(component.length).toBe(1);
    }); 

    test('input component contains a form', () => {
        const wrapper = setUp(); 
        expect(wrapper.find('.input-form').length).toBe(1);
    }); 

    test('the form contains an input field', () => {
        const wrapper = setUp(); 
        const input = findByTestAttr(wrapper, 'input-field');
        expect(input.length).toBe(1); 
    }); 

    test('has an initial state set to an empty string', () => {
        const wrapper = setUp(); 
        expect(wrapper.state()).toEqual(initialState);
    });

    test('has a submit button', () => {
       const wrapper = setUp(); 
       const button = findByTestAttr(wrapper, 'submit-button'); 
       expect(button.length).toBe(1);
    }); 

    test('on submit, updates state to whatever was inserted into input', () => {
       const wrapper = setUp(); 
       let text = findByTestAttr(wrapper, 'input-field');
       text.simulate('change', {
           target: {inputText: 'party'}
       })
      expect(text.value).toEqual(wrapper.state({inputText: 'party'}));
    });

    test("input component renders ListToDos and passes `todos` down as props", () => {
        const wrapper = setUp(); 
        // expect(wrapper.find(ListToDos).render().find('.todos').length).toBe(1);
        expect(wrapper.contains(<ListToDos />)).toEqual(true);
    });
})