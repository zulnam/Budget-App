import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';


test ('should return default empty expense state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
});


test ('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test ('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test ('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'gift card',
            note: 'a particular note',
            amount: 15,
            createdAt: 1000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});


test ('should edit expense', () => {
    const updates = {
        description: 'Tabac',
        note: '2',
        amount: 365,
        createdAt: 100
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        ...updates,
        id: '1'
    });
});


test ('should not edit any expense if id not found', () => {
    const updates = {
        description: 'phpstorm'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});