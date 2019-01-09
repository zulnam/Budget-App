import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixture/filters";
import expenses from "../fixture/expenses";
import moment from "moment";

let setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  wrapper,
  onFocusChange;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  onFocusChange = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onFocusChange={onFocusChange}
    />
  );
});

test("should render expenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render expenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "newText";
  wrapper.find("input").simulate("change", {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate
  });

  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

// test("should handle date focus change", () => {
//   const calendarFocused = true;
//   wrapper.find("DateRangePicker").prop("focusedInput")(calendarFocused);

//   expect(onFocusChange).toHaveBeenLastCalledWith(value);
// });

test("should handle text change", () => {
  const value = "rent";

  wrapper.find("input").simulate("change", {
    target: { value }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("sort by date", () => {
  const value = "date";

  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("sort by amount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("handle date focus changes", () => {
  const calendarFocused = "endDate";

  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
