import React from 'react';
import {connect } from 'react-redux';

//components
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/expenses";

export class EditPage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onClick}
                >Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);