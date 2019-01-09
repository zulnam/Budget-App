import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixture/expenses';
import moment from 'moment';


//mock moment to let us define a specific moment in time (bun pentru date/ore)
test ('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});


test ('should render ExpenseForm with populated fields', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});


test ('should render error for invalid form submit', () => {
    const wrapper = shallow(<ExpenseForm/>);

    //preventDefault pentru ca nu are loc nici un default event in componenta; event-ul poate fi gol
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test ('should set description on input change', () => {
   const wrapper = shallow(<ExpenseForm/>);
   const value = 'New Description';
   //at - cauta al x-lea find; incepe de la 0
   wrapper.find('input').at(0).simulate('change', {
       target: {value}
   });
   expect(wrapper.state('description')).toBe(value);
});


test ('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'new text for the text area unit test';
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('notes')).toBe(value);
});

test ('should set amount on valid input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = '15.13';
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test ('should not set amount on invalid input change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = '84.451';
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});


test ('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorMessage')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});


test ('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    //use of find by component
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});


test ('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});