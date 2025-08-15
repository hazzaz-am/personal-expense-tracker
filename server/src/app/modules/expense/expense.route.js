const { Router } = require("express");
const { ExpenseController } = require("./expense.controller");

const router = Router();

// /api/v1/expenses
router.post("/", ExpenseController.createExpense);

// /api/v1/expenses
router.get("/", ExpenseController.getAllExpense);

// /api/v1/expenses/:id
router.patch("/:id", ExpenseController.updateExpense);

// /api/v1/expenses/:id
router.delete("/:id", ExpenseController.deleteExpense);

module.exports = {
	ExpensesRoutes: router,
};
