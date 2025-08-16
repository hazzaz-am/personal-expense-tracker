const { Schema, mongoose } = require("mongoose");

const expenseSchema = new Schema(
	{
		title: {
			type: String,
			min: [3, "Title must be at least 3 characters long"],
			required: [true, "Title is required"],
		},
		amount: {
			type: Number,
			min: [1, "Amount must be greater than 0"],
			required: [true, "Amount is required"],
		},
		category: {
			type: String,
			required: [true, "Category is required"],
		},
		date: {
			type: Date,
			required: [true, "Date is required & must be a valid date"],
			validate: {
				validator: function (v) {
					return v instanceof Date && !isNaN(v);
				},
				message: (props) => `${props.value} is not a valid date!`,
			},
		},
	},
	{
		timestamps: true,
	}
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = { Expense };
