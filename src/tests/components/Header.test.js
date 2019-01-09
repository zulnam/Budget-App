import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme'
import Header from '../../components/Header';

//method using enzyme
test ('should render header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
});


// method using react-test-renderer
// test ('should render header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header/>);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });