import React from 'react';
import { connect } from 'react-redux';

//components
import ExpenseForm from './ExpenseForm';
import { addExpense } from "../actions/expenses";


export class AddPage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add New Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}
//
// const AddPage = (props) => (
//     <div>
//         <h1>Add New Expense</h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 // props.dispatch(addExpense(expense)); <-inlocuit de linia de mai jos multumit lui mapDispatchToProps
//                 props.onSubmit(expense);
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

// props.dispatch(addExpense(expense)); <-inlocuit de onSubmit multumit lui mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddPage);