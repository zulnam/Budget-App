import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";
//components
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/getVisibleExpenses";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
