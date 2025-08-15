const { Router } = require("express");
const { ExpensesRoutes } = require("../modules/expense/expense.route");

module.exports = {
	router: Router(),
};

const moduleRoutes = [
	{
		path: "/expenses",
		route: ExpensesRoutes,
	},
];

moduleRoutes.forEach((route) => {
	router.use(route.path, route.route);
});
