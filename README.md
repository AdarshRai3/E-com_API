# E-Commerce API

## Description
This project provides an API for performing CRUD (Create, Read, Update, Delete) operations on products and users in an e-commerce application. It utilizes Express.js, MongoDB, and Mongoose for server-side development and Swagger UI for documentation.

## Installation
To install and run the project on your local system, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/e-com-api.git
    ```
    Use code with caution. Learn more

2. **Install dependencies:**
    ```bash
    npm install
    ```
    Use code with caution. Learn more

3. **Create a .env file:**
    Create a .env file in the project root directory and add the following environment variables:
    ```env
    MONGODB_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    ```
    Replace `<your-mongodb-connection-string>` with your MongoDB connection string and `<your-jwt-secret-key>` with a strong secret key for generating JSON Web Tokens (JWTs).

4. **Start the server:**
    ```bash
    npm start
    ```
    Use code with caution. Learn more

The server will start on port 3000.
