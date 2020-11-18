import React from 'react';
import {shallow} from 'enzyme'; 
import Input from './Input'
import ListToDos from './ListToDos';
describe('make sure input component has form, input, submit button', () => {


    const setUp = () => shallow(<Input />);
     const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
    const initialState = {inputText: '', list: []};

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

    test('has an initial state `inputText` set to an empty string and a `list` set to empty array', () => {
        const wrapper = setUp(); 
        expect(wrapper.state()).toEqual(initialState);
    });

    test('has a submit button', () => {
       const wrapper = setUp(); 
       const button = findByTestAttr(wrapper, 'submit-button'); 
       expect(button.length).toBe(1);
    }); 

    test('on change, updates `inputText` state to whatever was inserted into input', () => {
       const wrapper = setUp(); 
       let text = findByTestAttr(wrapper, 'input-field');
       text.simulate('change', {
           target: {inputText: 'party'}
       })
      expect(text.value).toEqual(wrapper.state({inputText: 'party'}));
    });

    // test('on submit, the inputText gets stored in the `list` array', () => {
    //    const expectedItems = ['party']
    // const wrapper = setUp(); 
    // let listState = wrapper.state().list; 
    // expect(wrapper.state('list')).toStrictEqual(listState); 
    // wrapper.find('.btn').simulate('submit');
    // console.log(wrapper.instance().state.list)
    // expect(listState).toBe(['party']);
    // });

    test("input component renders ListToDos and passes `todos` down as props", () => {
        const wrapper = setUp(); 
        // expect(wrapper.find(ListToDos).render().find('.todos').length).toBe(1);
        expect(wrapper.contains(<ListToDos />)).toEqual(true);
    });

    test("input component adds prop called`lists` onto ListToDos render", () => {

    });
})