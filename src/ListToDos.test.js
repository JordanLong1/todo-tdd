import {shallow} from 'enzyme';
import ListToDos from './ListToDos';
const setUp = () => shallow(<ListToDos />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders component without throwing error', () => {
    const wrapper = setUp(); 
    const component = findByTestAttr(wrapper, 'todos-component'); 
    expect(component.length).toBe(1); 
}); 
test('render ul without throwing an error', () => {
   const wrapper = setUp(); 
   const unorderedList = wrapper.find('.ul'); 
   expect(unorderedList.length).toBe(1)
}); 

test('component includes header with text saying `here are your tasks`', () => {
    const wrapper = setUp(); 
    const header = wrapper.find('.todo-header'); 
    expect(header.text()).toEqual('Here are your tasks: ');
}); 
test('rendes li with todo data without throwing an error', () => {
    const wrapper = setUp(); 
    const list = findByTestAttr(wrapper, 'todos-li'); 
    expect(list.length).toBe(1); 
}); 
