import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);

	const filteredExpenses = props.items.filter(
		expense => expense.date.getFullYear() === +filteredYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					pickedYear={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
