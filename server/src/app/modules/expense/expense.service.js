const AppError = require("../../errors/appError");
const { Expense } = require("./expense.model");

const createExpense = async (payload) => {
	const expense = await Expense.create(payload);
	return expense;
};

const getAllExpense = async ({ category, startDate, endDate }) => {
	const query = {};
	if (category) {
		query.category = category;
	}

	if (startDate || endDate) {
		query.date = {};
		if (startDate) {
			query.date.$gte = new Date(startDate);
		}
		if (endDate) {
			query.date.$lte = new Date(endDate);
		}
	}

	const expenses = await Expense.find(query).sort({ createdAt: -1 });
	const totalDocuments = await Expense.countDocuments();
	const totalExpenses = await Expense.aggregate([
		{
			$group: {
				_id: null,
				total: { $sum: "$amount" },
			},
		},
	]);

	const total = totalExpenses[0] ? totalExpenses[0].total : 0;

	return { data: expenses, meta: { totalDocuments, total } };
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
