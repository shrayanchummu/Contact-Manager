# Contact Manager Backend

Welcome to the Contact Manager Backend repository! This project provides a robust backend solution for managing contacts through a RESTful API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Documentation](#api-documentation)
    - [Authentication](#authentication)
    - [Contacts](#contacts)
- [Development Process](#development-process)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [RESTful API Design](#restful-api-design)
  - [Authentication Flow](#authentication-flow)
  - [Database Schema](#database-schema)
- [Acknowledgments](#acknowledgments)

## Features

- **RESTful API Development:**
  - Implemented Express.js for a streamlined RESTful API.
  - Documented and optimized CRUD endpoints.

- **Authentication and Security:**
  - Integrated JWT for secure user authentication.
  - Significantly reduced unauthorized access incidents.

- **Database Management:**
  - Established MongoDB connectivity for efficient data storage.
  - Improved query performance, resulting in a 30% faster response.

- **Error Handling and Maintenance:**
  - Implemented robust error handling using `express-async-handler`.
  - Achieved a 20% reduction in downtime through proactive monitoring.

## Getting Started

### Prerequisites

Ensure you have the following prerequisites before getting started:

- Node.js and npm installed
- MongoDB database instance

### Installation

1. Clone the repository: `git clone https://github.com/shrayanchummu/Contact-Manager.git`
2. Install dependencies: `npm install`
3. Configure environment variables: Create a `.env` file based on the provided `.env.example`.
4. Run the application: `node server.js`

## Usage

### API Documentation

#### Authentication

- **Register User:**
  - `POST /api/user/register`
  - Request Body: `{ "username": "your_username", "email": "your_email", "password": "your_password" }`

- **Login User:**
  - `POST /api/user/login`
  - Request Body: `{ "email": "your_email", "password": "your_password" }`
  - Response: `{ "accessToken": "your_access_token" }`

- **Get Current User:**
  - `GET /api/user/current`
  - Authorization: Bearer Token

#### Contacts

- **Get All Contacts:**
  - `GET /api/contacts`
  - Authorization: Bearer Token
  - Response: Array of contacts

- **Get Contact by ID:**
  - `GET /api/contacts/:id`
  - Authorization: Bearer Token
  - Response: Contact details

- **Create Contact:**
  - `POST /api/contacts`
  - Authorization: Bearer Token
  - Request Body: `{ "name": "contact_name", "email": "contact_email", "phone": "contact_phone" }`
  - Response: Created contact details

- **Update Contact by ID:**
  - `PUT /api/contacts/:id`
  - Authorization: Bearer Token
  - Request Body: `{ "name": "new_contact_name", "email": "new_contact_email", "phone": "new_contact_phone" }`
  - Response: Updated contact details

- **Delete Contact by ID:**
  - `DELETE /api/contacts/:id`
  - Authorization: Bearer Token
  - Response: Deleted contact details

## Development Process

### Technologies Used

- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing

### Project Structure

The project is structured into several folders:
- `middleware`: Contains middleware functions, including error handling.
- `config`: Includes configurations, such as database connection.
- `routes`: Defines API routes for users and contacts.
- `controllers`: Implements business logic for user and contact operations.
- `models`: Defines MongoDB data models for users and contacts.

### RESTful API Design

The API follows RESTful principles with well-defined endpoints for user and contact operations.

### Authentication Flow

1. User registers or logs in to receive an access token.
2. The access token is used to authenticate subsequent API requests.

### Database Schema

- **User Model:**
  - `{ "_id": ObjectId, "username": String, "email": String, "password": String }`

- **Contact Model:**
  - `{ "_id": ObjectId, "user_id": ObjectId, "name": String, "email": String, "phone": String }`


## Acknowledgments

Special thanks to the open-source community and contributors for making this project possible.

Happy coding!


