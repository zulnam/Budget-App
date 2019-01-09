import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from "../../components/EditPage";
import expenses from '../fixture/expenses';

let wrapper, history, editExpense, removeExpense;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditPage
        expense={expenses[0]}
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
    />);
});

test ('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test ('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[2]);
});

test ('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});