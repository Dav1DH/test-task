# NestJS User Management API
A simple server application built with NestJS, Node.js v20.10.0, MySQL, and Sequelize. The
application provides RESTful endpoints to add and retrieve users and implements JWT
authentication for securing the endpoints.
---
## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Clone the Repository](#clone-the-repository)
- [Install Dependencies](#install-dependencies)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Start the Database](#start-the-database)
- [Start the Application](#start-the-application)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Register User](#register-user)
- [Login User](#login-user)
- [Get User](#get-user)
- [Testing the Application](#testing-the-application)
- [License](#license)
- [Acknowledgments](#acknowledgments)
---
## Features
- **NestJS Framework**: Built using NestJS for a scalable architecture.
- **Node.js v20.10.0**: Utilizes the latest features of Node.js.
- **MySQL Database**: Stores user data in a MySQL database.
- **Sequelize ORM**: Manages database interactions using Sequelize.
- **JWT Authentication**: Secures API endpoints with JSON Web Tokens.
- **Dockerized Database**: Runs the MySQL database in a Docker container for consistent
development.
---
## Prerequisites
- **Node.js v20.10.0**: Install from [Node.js official website](https://nodejs.org/en/).
- **Docker**: Install Docker and Docker Compose.
- **Git**: For cloning the repository.
---
## Getting Started
### Clone the Repository
```bash
git clone https://github.com/your_username/your_repository.git
cd your_repository
```
### Install Dependencies
```bash
npm install
```
### Environment Variables
Create a `.env` file in the root directory to store environment variables.
```env
# .env file
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database
JWT_SECRET=your_jwt_secret
```
**Note:** Replace `your_username`, `your_password`, `your_database`, and `your_jwt_secret` with
your actual credentials.
---
## Running the Application
### Start the Database
Ensure Docker and Docker Compose are installed on your machine.
```bash
npm run docker:db
```
This command will start the MySQL database container using Docker Compose.
### Start the Application
Run the NestJS application:
```bash
npm run start:dev
```
The application will start in development mode with hot-reloading.
---
## Available Scripts
In the project directory, you can run:
- **`npm run start`**: Runs the app in production mode.
- **`npm run start:dev`**: Runs the app in development mode with hot-reload.
- **`npm run start:debug`**: Runs the app in debug mode.
- **`npm run start:prod`**: Runs the compiled app in production mode.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run prebuild`**: Cleans the `dist` folder before building.
- **`npm run format`**: Formats the code using Prettier.
- **`npm run lint`**: Lints the code using ESLint.
- **`npm run test`**: Launches the test runner.
- **`npm run test:watch`**: Runs tests in watch mode.
- **`npm run test:cov`**: Runs tests and generates coverage reports.
- **`npm run test:e2e`**: Runs end-to-end tests.
- **`npm run migration:generate`**: Generates a new Sequelize migration.
- **`npm run migration:run`**: Runs pending Sequelize migrations.
- **`npm run migration:revert`**: Reverts the last Sequelize migration.
- **`npm run docker:db`**: Starts the database container.
- **`npm run docker:db:down`**: Stops and removes the database container.
---
## API Endpoints
### Authentication
All API endpoints are protected using JWT authentication, except for registration and login. Include
the JWT token in the `Authorization` header as a Bearer token.
**Header Example:**
```
Authorization: Bearer your_jwt_token
```
### Register User
- **Endpoint:** `POST /api/v1/users/register`
- **Description:** Registers a new user.
- **Headers:**
- `Content-Type`: `application/json`
- **Body Parameters:**
- `name` (string): User's name.
- `email` (string): User's email.
- `phone` (string): User's phone number.
- `password` (string): User's password.
- **Example:**
```json
{
"name": "John Doe",
"email": "john@example.com",
"phone": "1234567890",
"password": "password123"
}
```
### Login User
- **Endpoint:** `POST /api/v1/auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Headers:**
- `Content-Type`: `application/json`
- **Body Parameters:**
- `email` (string): User's email.
- `password` (string): User's password.
- **Example:**
```json
{
"email": "john@example.com",
"password": "password123"
}
```
### Get User
- **Endpoint:** `GET /api/v1/users/:id`
- **Description:** Retrieves a user by ID. **Protected route**.
- **Headers:**
- `Authorization`: Bearer token.
- **URL Parameter:**
- `id` (integer): ID of the user.
- **Example:**
```
GET /api/v1/users/1
```
---
## Testing the Application
### Generate a JWT Token
1. **Register a New User**
```bash
curl -X POST http://localhost:3000/api/v1/users/register -d '{
-H "Content-Type: application/json"
"name": "John Doe",
"email": "john@example.com",
"phone": "1234567890",
"password": "password123"
}'
```
2. **Login to Obtain a JWT Token**
```bash
curl -X POST http://localhost:3000/api/v1/auth/login -H "Content-Type: application/json" -d '{
"email": "john@example.com",
"password": "password123"
}'
```
Copy the `access_token` from the response.
### Test API Endpoints
Use `curl`, `Postman`, or any API client to test the endpoints.
#### Get User Example
```bash
curl -X GET http://localhost:3000/api/v1/users/1 -H "Authorization: Bearer your_jwt_token"
```
---