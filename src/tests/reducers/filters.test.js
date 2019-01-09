import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test ('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test ('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});


test ('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test ('should set text to given value', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'text filter' };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('text filter');
});


test('should set startDate filter to given value', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0).add(2, 'month') };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0).add(2, 'month'));
});


test('should set endDate filter to given value', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0).add(3, 'months') };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0).add(3, 'month'));
});