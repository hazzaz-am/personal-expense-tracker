# Personal Expense Tracker - Backend

A Node.js Express backend API for managing personal expenses with MongoDB integration.

## 🚀 Features

- **Expense Management**: Create, read, update, and delete expenses
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **Environment Configuration**: Secure environment variable management
- **Error Handling**: Comprehensive error handling middleware
- **CORS Support**: Cross-origin resource sharing enabled
- **Production Ready**: Configured for deployment on Vercel

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Development**: nodemon for auto-restart
- **Package Manager**: pnpm
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (package manager) - Install with: `npm install -g pnpm`
- **MongoDB** database (local installation or MongoDB Atlas account)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hazzaz-am/personal-expense-tracker
cd personal-expense-tracker
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=mongodb://localhost:27017/expense-tracker
```

**Environment Variables Explanation:**

- `PORT`: The port number on which the server will run (default: 5000)
- `NODE_ENV`: Environment mode (development/production)
- `DATABASE_URL`: MongoDB connection string
  - For local MongoDB: `mongodb://localhost:27017/expense-tracker`
  - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/expense-tracker`


## 🚀 Running the Application

### Development Mode (with auto-restart)

```bash
pnpm run dev
```

### Production Mode

```bash
pnpm start
```

The server will start and you should see:

```
🟢 Database Connected
Server is listening on PORT: 5000
```

## 📡 API Endpoints

### Base URL

```
http://localhost:5000/api/v1
```

### Expense Endpoints

| Method   | Endpoint        | Description             |
| -------- | --------------- | ----------------------- |
| `POST`   | `/expenses`     | Create a new expense    |
| `GET`    | `/expenses`     | Get all expenses        |
| `PATCH`  | `/expenses/:id` | Update an expense by ID |
| `DELETE` | `/expenses/:id` | Delete an expense by ID |

### Example API Requests

#### Create Expense

```bash
POST http://localhost:5000/api/v1/expenses
Content-Type: application/json

{
  "title": "Grocery Shopping",
  "amount": 75.50,
  "category": "Food",
  "date": "2025-08-16",
}
```

#### Get All Expenses

```bash
GET http://localhost:5000/api/v1/expenses
```

#### Update Expense

```bash
PATCH http://localhost:5000/api/v1/expenses/66c0a1b2c3d4e5f6g7h8i9j0
Content-Type: application/json

{
  "amount": 80.00,
}
```

#### Delete Expense

```bash
DELETE http://localhost:5000/api/v1/expenses/66c0a1b2c3d4e5f6g7h8i9j0
```

## 📁 Project Structure

```
personal-expense-tracker/
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   └── env.js              # Environment configuration
│   │   ├── errors/
│   │   │   └── appError.js         # Custom error class
│   │   ├── helpers/
│   │   │   └── handleError.js      # Error handling utilities
│   │   ├── middlewares/
│   │   │   ├── globalErrorHandler.js    # Global error middleware
│   │   │   └── notFoundHandler.js       # 404 handler
│   │   ├── modules/
│   │   │   └── expense/
│   │   │       ├── expense.controller.js    # Expense controllers
│   │   │       ├── expense.model.js         # Expense data model
│   │   │       ├── expense.route.js         # Expense routes
│   │   │       └── expense.service.js       # Expense business logic
│   │   ├── routes/
│   │   │   └── index.js            # Route aggregation
│   │   └── utils/
│   │       ├── catchAsync.js       # Async error wrapper
│   │       └── sendResponse.js     # Response formatter
│   ├── app.js                      # Express app configuration
│   └── server.js                   # Server entry point
├── .env                            # Environment variables (create this)
├── package.json                    # Dependencies and scripts
├── pnpm-lock.yaml                  # Lock file for pnpm
├── vercel.json                     # Vercel deployment config
└── README.md                       # Project documentation
```

---

**Happy coding! 🎉**
