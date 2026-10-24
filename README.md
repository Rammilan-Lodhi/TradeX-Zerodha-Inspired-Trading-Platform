# Zerodha Clone – Full Stack Web Application

A full-stack Zerodha-inspired web application developed as a major project. This project demonstrates a modern trading platform interface with separate frontend, dashboard, and backend applications, along with user authentication, email verification, and database integration.

## 🚀 TradeX – Live Demo

**Live Website:** [TradeX – Zerodha Clone](https://tradex-frontend-vmck.onrender.com/)

## Project Overview

The application is organized into three main parts:

1. **Frontend:** Landing page and user-facing website.
2. **Dashboard:** Trading dashboard for holdings, positions, orders, and portfolio information.
3. **Backend:** REST APIs, user authentication, email verification, and database operations.

## Features

### Frontend

- Home page
- About page
- Products page
- Pricing page
- Support page
- Signup page
- Navigation bar and footer
- Product and pricing information
- Support and ticket section
- Responsive user interface

### Dashboard

- Holdings management
- Positions tracking
- Orders interface
- Buy and sell action windows
- Portfolio-related information
- Charts and graphical data
- API integration using Axios
- Trading platform-inspired interface

### Backend

- REST API development
- MongoDB database integration
- User registration and login
- User model using Mongoose
- Email verification using a code or token
- Password hashing and credential validation
- Holdings management
- Positions management
- Order creation
- Buy/sell-related request handling
- Error handling and request validation

### User Authentication

The authentication system manages user accounts and login-related operations.

Depending on the implemented functionality, it may include:

- User registration
- User login and logout
- Password hashing
- Credential validation
- Email verification
- Verification code or token expiration
- Authentication middleware
- Protected routes

### Email Verification

Email verification helps confirm that a user has access to the registered email address.

The typical workflow is:

1. A user registers with an email address and Name.
2. The backend creates the user account.
3. A verification code or link is sent to the registered email address.
4. The user enters the code or opens the verification link.
5. The backend validates the code or token and checks its expiration.
6. The user's email verification status is updated.
7. The application applies its configured access rules for verified users.

Email delivery can be implemented using Nodemailer with an SMTP provider or an email verification service.

### User Model

The User model defines the structure of user information stored in MongoDB through Mongoose.

Depending on the implementation, the model can include:

- Name
- Email address
- Password hash
- Email verification status
- Verification code or token
- Verification token expiration
- Account creation and update timestamps

Passwords should be hashed before storage. Verification codes or tokens should expire and be invalidated after successful verification.

## Technologies Used

| Category                | Technologies                                                          |
| ----------------------- | --------------------------------------------------------------------- |
| Frontend                | HTML5, CSS3, JavaScript, React.js                                     |
| Routing                 | React Router                                                          |
| UI Framework            | Bootstrap, Material UI                                                |
| API Communication       | Axios                                                                 |
| Charts                  | Chart.js, React Chart.js 2                                            |
| Backend                 | Node.js, Express.js                                                   |
| Database                | MongoDB, Mongoose                                                     |
| Authentication          | Password hashing, authentication middleware, tokens where implemented |
| Email Verification      | Nodemailer or configured email service                                |
| Unit Testing            | Jest                                                                  |
| API Testing             | Supertest                                                             |
| React Component Testing | React Testing Library                                                 |
| Development Tools       | Visual Studio Code, Git, GitHub, npm                                  |

_Testing tools and authentication methods should be listed as implemented only if they are configured in the project._

## Project Structure

```text
Zerodha Major Project/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Holdings.js
│   │   ├── Positions.js
│   │   └── Orders.js
│   │
│   ├── routes/
│   ├── schemas/
│   ├── tests/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

_Note: This is a representative structure. Update the filenames and directories to match your actual project._

## Requirements

Install the following software before running the project:

- **Node.js and npm:** [https://nodejs.org/](https://nodejs.org/)
- **Git:** [https://git-scm.com/](https://git-scm.com/)
- **MongoDB:** MongoDB Atlas or a local MongoDB installation

Verify the installations:

```bash
node -v
npm -v
git --version
```

You also need an accessible MongoDB database and, if email verification is enabled, valid SMTP or email-service configuration.

## Installation and Setup

### Step 1: Clone the Repository

Replace the placeholders with your actual GitHub username and repository name.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd "Zerodha Major Project"
```

If the repository has a different directory name, navigate to that directory instead.

### Step 2: Configure the Backend

Open a terminal at the project root and run:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

If your authentication or email verification implementation requires additional environment variables, configure them according to your backend code. For example:

```env
JWT_SECRET=your_secret_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

These variables are examples, not guaranteed names for your implementation. Use the exact names referenced in your source code. For SMTP authentication, use an appropriate provider-issued credential rather than your ordinary email password.

**Security:** Never commit your actual `.env` file, database credentials, JWT secrets, or email credentials to GitHub.

### Step 3: Start the Backend

Run the script configured in the backend `package.json`:

```bash
npm start
```

If a development script is configured, you can use:

```bash
npm run dev
```

The backend will run on the configured port, for example:

`http://localhost:8080`

### Step 4: Set Up the Dashboard

Open a new terminal at the project root:

```bash
cd dashboard
npm install
npm start
```

The dashboard is expected to run at:

`http://localhost:3001`

The actual port depends on your React configuration.

### Step 5: Set Up the Frontend

Open another terminal at the project root:

```bash
cd frontend
npm install
npm start
```

The frontend is expected to run at:

`http://localhost:3000`

If the port is already occupied, configure the applications to use separate ports. Create React App may prompt you to select another port.

### Running the Complete Project

Run all three applications in separate terminals.

**Terminal 1 — Backend**

```bash
cd backend
npm start
```

**Terminal 2 — Dashboard**

```bash
cd dashboard
npm start
```

**Terminal 3 — Frontend**

```bash
cd frontend
npm start
```

Install dependencies in each application directory before the first run. Keep all three applications running during development.

## Backend API

The backend provides REST APIs for database operations and communication with the dashboard.

The following are example endpoints; verify the paths and HTTP methods against your actual route definitions.

| Method | Endpoint                 | Purpose                               |
| ------ | ------------------------ | ------------------------------------- |
| GET    | `/allHoldings`           | Retrieve holdings data                |
| POST   | `/addHoldings`           | Add holdings information              |
| POST   | `/newOrder`              | Create a new order                    |
| POST   | `/api/auth/signup`       | Register a user, if implemented       |
| POST   | `/api/auth/login`        | Authenticate a user, if implemented   |
| POST   | `/api/auth/verify-email` | Verify a user's email, if implemented |

Authentication endpoints may use different paths in your project. The examples above do not guarantee that these routes already exist.

## Database

The project uses **MongoDB** for data storage and **Mongoose** for schema definition and database operations.

Database models may include:

- **User:** Account details, password hash, and email verification status.
- **Holdings:** Stock holding information.
- **Positions:** Trading position information.
- **Orders:** Order-related information.

The backend connects to MongoDB using a connection string stored in an environment variable.

## Unit Testing

Unit testing helps verify that individual functions, models, and components behave as expected.

For a Node.js and React project, Jest is a suitable JavaScript testing framework. JUnit is primarily used for Java applications.

### Testing Tools

- **Jest:** Unit testing for JavaScript functions and modules.
- **Supertest:** Testing Express.js API endpoints.
- **React Testing Library:** Testing React components and user interactions.
- **MongoDB test database:** Isolated testing of database-dependent functionality, where required.

### Areas to Test

| Module             | Example test cases                                |
| ------------------ | ------------------------------------------------- |
| User model         | Required fields and email validation              |
| Registration       | Valid input and duplicate email handling          |
| Authentication     | Valid and invalid credentials                     |
| Password security  | Password hashing and comparison                   |
| Email verification | Valid, invalid, and expired verification codes    |
| Holdings API       | Successful data retrieval                         |
| Positions API      | Correct response and data handling                |
| Orders API         | Valid order creation and invalid request handling |
| Dashboard          | Rendering and user interactions                   |

### Configure Jest

If Jest is not already installed in the backend, install the required development dependencies:

```bash
npm install --save-dev jest supertest
```

Add a test script to the backend `package.json` while preserving your existing scripts:

```json
{
  "scripts": {
    "start": "node index.js",
    "test": "jest --runInBand"
  }
}
```

The `start` script above is an example; retain your existing startup command if it differs.

Create a `tests/` directory for backend test files. For example:

```text
backend/
├── models/
├── routes/
├── tests/
│   ├── user.test.js
│   ├── auth.test.js
│   └── orders.test.js
├── index.js
└── package.json
```

Run the tests from the backend directory:

```bash
npm test
```

For React component testing, configure React Testing Library and its compatible testing dependencies in the dashboard or frontend application.

**Note:** These are testing setup instructions and suggested test cases. Tests should be implemented and executed before claiming that the application has passed them.

## Security Best Practices

- Store sensitive configuration in environment variables.
- Hash passwords before storing them.
- Validate and sanitize incoming requests.
- Protect restricted endpoints with appropriate authentication and authorization.
- Apply expiration and rate limits to email verification codes.
- Avoid logging passwords, verification codes, or secrets.
- Keep private credentials out of frontend code.
- Configure CORS for the expected frontend origins.
- Use HTTPS and secure cookie settings in production, where applicable.
- Do not use real financial credentials or sensitive personal information while testing.

## Git Ignore Configuration

Ensure that your `.gitignore` includes entries similar to these:

```gitignore
node_modules/
.env
.env.*
!.env.example
build/
dist/
*.log
```

The `.env.example` exception is safe only when the example contains placeholders rather than real secrets.

##

## Disclaimer

This project is developed for educational and demonstration purposes. It is inspired by the interface and concepts of an online trading platform. It is not an official Zerodha application and is not affiliated with Zerodha. It does not imply access to real trading services or live market data.

## Author

**Rammilan Lodhi**

- GitHub: [Rammilan-Lodhi](https://github.com/Rammilan-Lodhi)
- Portfolio: [Personal Portfolio](https://rammilan-lodhi-portfolio.vercel.app/)

---

If you find this project useful, consider giving the repository a star on GitHub.
