Sure, here is the updated README file with Markdown syntax for copy snippets and the additional links you provided:

```markdown
# E-Commerce API

## Description

This project provides an API for performing CRUD (Create, Read, Update, Delete) operations on products and users in an e-commerce application. It utilizes Express.js, MongoDB, and Mongoose for server-side development and Swagger UI for documentation.

## Installation

To install and run the project on your local system, follow these steps:

### 1. Clone the repository:

```bash
git clone [https://github.com/](https://github.com/)<your-username>/e-com-api.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a `.env` file:

Create a `.env` file in the project root directory and add the following environment variables:

```env
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>


Replace `<your-mongodb-connection-string>` with your MongoDB connection string and `<your-jwt-secret-key>` with a strong secret key for generating JSON Web Tokens (JWTs).

### 4. Start the server:

bash
npm start


The server will start on port 3000.

## API Documentation

For API documentation, visit http://localhost:3000/api-docs.

## Testing API with Postman

A Postman collection for testing the API is available at:

[Postman Collection for API Testing](https://api.postman.com/collections/30591069-8a0d3f81-27d1-4e19-9089-fc106076b01b?access_key=PMAT-01HFQPD2XJYPCDRW4R78ZD274P)

This collection includes test cases for all the major API endpoints, covering both functional and non-functional aspects of the API. You can use this collection to validate the API's behavior and ensure that it meets your requirements.
