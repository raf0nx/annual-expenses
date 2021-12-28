import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const titleChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredTitle: event.target.value,
		}));
	};

	const amountChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredAmount: event.target.value,
		}));
	};

	const dateChangeHandler = event => {
		setUserInput(prevState => ({
			...prevState,
			enteredDate: event.target.value,
		}));
	};

	const submitHandler = event => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						onChange={titleChangeHandler}
						value={userInput.enteredTitle}
						type="text"
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						onChange={amountChangeHandler}
						value={userInput.enteredAmount}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						onChange={dateChangeHandler}
						value={userInput.enteredDate}
						type="date"
						min="2019-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
