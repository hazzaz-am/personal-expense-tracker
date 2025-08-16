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
git clone <your-repository-url>
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

# JWT Configuration (if using authentication)
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
```

**Environment Variables Explanation:**

- `PORT`: The port number on which the server will run (default: 5000)
- `NODE_ENV`: Environment mode (development/production)
- `DATABASE_URL`: MongoDB connection string
  - For local MongoDB: `mongodb://localhost:27017/expense-tracker`
  - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/expense-tracker`

### 4. Database Setup

#### Option A: Local MongoDB

1. Install MongoDB Community Edition from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. The database will be created automatically when the application connects

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add your IP address to the whitelist
4. Create a database user
5. Get the connection string and update your `.env` file

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
  "description": "Weekly grocery shopping"
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
  "description": "Updated grocery amount"
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

## 🔧 Available Scripts

| Script         | Description                                            |
| -------------- | ------------------------------------------------------ |
| `pnpm start`   | Start the server in production mode                    |
| `pnpm run dev` | Start the server in development mode with auto-restart |
| `pnpm test`    | Run tests (not configured yet)                         |

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running (if using local installation)
   - Check your `DATABASE_URL` in the `.env` file
   - Verify network connectivity for MongoDB Atlas

2. **Port Already in Use**

   - Change the `PORT` in your `.env` file
   - Or kill the process using the port: `npx kill-port 5000`

3. **Environment Variables Not Loading**

   - Ensure `.env` file is in the root directory
   - Check that all required variables are present
   - Restart the server after making changes

4. **pnpm Command Not Found**
   - Install pnpm globally: `npm install -g pnpm`
   - Or use npm instead: `npm install` and `npm run dev`

## 📦 Deployment

### Vercel Deployment

This project is configured for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `NODE_ENV=production`
- `DATABASE_URL=<your-mongodb-atlas-url>`
- `PORT=5000` (or as required by platform)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

---

**Happy coding! 🎉**
