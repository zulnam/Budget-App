import { addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('234', {description: 'name', amount: 55});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '234',
        updates: {
            description: 'name',
            amount: 55
        }
    });
});

test('should setup add expense custom action object', () => {
    const expectedResult = {
        description: 'name2',
        note: 'note1',
        amount: 515,
        createdAt: 1000
    };
    const action = addExpense(expectedResult);
    expect(action).toEqual({
       type: 'ADD_EXPENSE',
       expense: {
           ...expectedResult,
           id: expect.any(String)
       }
    });
});

test('should setup default add expense action object', () => {
    const expectedResult = {
        description: '',
        note: '',
        amount:  0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedResult,
            id: expect.any(String)
        }
    });
});