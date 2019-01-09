import React from 'react';

//components
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Homepage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default Homepage;