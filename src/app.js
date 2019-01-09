import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
//component
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from "./actions/expenses";
import {setTextFilter, sortByAmount} from "./actions/filters";
import getVisibleExpenses from "./selectors/getVisibleExpenses";


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 1000,  createdAt: 2500}));
store.dispatch(addExpense({description: 'Rent', amount: 450,  createdAt: 25000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 500, createdAt: 11000}));


// store.dispatch(setTextFilter('water'));
// store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

console.log(store.getState().expenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


