import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
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
				{filteredExpenses.map(expense => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
