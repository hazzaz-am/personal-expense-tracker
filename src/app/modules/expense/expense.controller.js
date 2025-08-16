const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const { ExpenseService } = require("./expense.service");

const createExpense = catchAsync(async (req, res) => {
	const result = await ExpenseService.createExpense(req.body);
	sendResponse(res, {
		statusCode: 201,
		success: true,
		message: "Expense created successfully",
		data: result,
	});
});

const getAllExpense = catchAsync(async (req, res) => {
	const { category, startDate, endDate } = req.query;
	const result = await ExpenseService.getAllExpense({
		category,
		startDate,
		endDate,
	});

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: "Expenses retrieved successfully",
		data: result.data,
		meta: result.meta,
	});
});

const updateExpense = catchAsync(async (req, res) => {
	const { id } = req.params;
	const updatedExpense = await ExpenseService.updateExpense(id, req.body);

	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: "Expense updated successfully",
		data: updatedExpense,
	});
});

const deleteExpense = catchAsync(async (req, res) => {
	const { id } = req.params;
	await ExpenseService.deleteExpense(id);
	sendResponse(res, {
		statusCode: 200,
		success: true,
		message: "Expense deleted successfully",
	});
});

module.exports.ExpenseController = {
	createExpense,
	getAllExpense,
	updateExpense,
	deleteExpense,
};
