import React from 'react';
import {connect} from "react-redux";

//components
import ExpenseItem from './ExpenseListItem';
import selectExpenses from '../selectors/getVisibleExpenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ul>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses.</p>
                ) : (
                    props.expenses.map((option) =>
                        <ExpenseItem
                            key={option.id}
                            {...option}
                        />
                )
                )
            }
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);