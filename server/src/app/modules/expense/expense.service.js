const AppError = require("../../errors/appError");
const { Expense } = require("./expense.model");

const createExpense = async (payload) => {
	const expense = await Expense.create(payload);
	return expense;
};

const getAllExpense = async () => {
	const expenses = await Expense.find();
	const totalDocuments = await Expense.countDocuments();
	const totalExpenses = await Expense.aggregate([
		{
			$group: {
				_id: null,
				total: { $sum: "$amount" },
			},
		},
	]);

	return { data: expenses, meta: { totalDocuments, totalExpenses } };
};

const updateExpense = async (id, payload) => {
	const expense = await Expense.findById(id);
	if (!expense) {
		throw new AppError(404, "Expense not found");
	}
	const updatedExpense = await Expense.findByIdAndUpdate(id, payload, {
		new: true,
	});
	return updatedExpense;
};

const deleteExpense = async (id) => {
	const expense = await Expense.findById(id);
	if (!expense) {
		throw new AppError(404, "Expense not found");
	}
	await Expense.findByIdAndDelete(id);
	return null;
};

module.exports.ExpenseService = {
	createExpense,
	getAllExpense,
	updateExpense,
	deleteExpense,
};
