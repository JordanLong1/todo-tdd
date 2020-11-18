import {shallow} from 'enzyme';
import ListToDos from './ListToDos';
const setUp = () => shallow(<ListToDos />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders component without throwing error', () => {
    const wrapper = setUp(); 
    const component = findByTestAttr(wrapper, 'todos-component'); 
    expect(component.length).toBe(1); 
}); 
test('on Input form submission, props have a length of one', () => {
    const wrapper = setUp(); 
    expect(wrapper.props().length).toBe(1);
}); 
test('rendes li with todo data without throwing an error', () => {
    const wrapper = setUp(); 
    const list = findByTestAttr(wrapper, 'todos-li'); 
    expect(list.length).toBe(1); 
}); 

test('li contains data from props', () => {

});