const { Router } = require("express");

module.exports = {
	router: Router(),
};

const moduleRoutes = [
	{
		path: "/expenses",
		// route: ExpensesRoutes,
	},
];

// moduleRoutes.forEach((route) => {
// 	router.use(route.path, route.route);
// });
