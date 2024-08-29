# User-Management-System

## Overview
This is a full-stack user management application that allows you to register users, manage their data, and perform CRUD operations. The frontend is built with React and Chakra UI, while the backend is built with Node.js and Express. MongoDB is used as the database.

## Features
User Registration: Allows users to register by entering their first name, last name, email, and password.
User List: Displays a list of registered users.
Edit and Delete Users: Allows the admin to edit and delete user information.
Modal-based Forms: Uses Chakra UI modals for user registration and editing forms.
Context API: Uses React Context API to manage global state.
## Tech Stack
- Frontend: React, Chakra UI
- Backend: Node.js, Express.js
- Database: MongoDB
- API Client: Axios
## Installation
Clone the repository:
```
git clone https://github.com/your-username/user-management.git
cd user-management
```
Backend Setup:

- Navigate to the backend directory and install the dependencies:
```
cd backend
npm install
```
Configure Environment Variables:

Create a .env file in the backend directory with the following variables:
```
MONGO_URI=your-mongodb-connection-string
PORT=5000
```
Run the Backend:

- Start the backend server using the following command:
```
npm start

```
The backend server should now be running on http://localhost:5000.

Frontend Setup:

- Navigate to the frontend directory and install the dependencies:
```
cd ../frontend
npm install
```
Run the Frontend:

- Start the frontend development server:
```
npm run dev
The frontend should now be running on http://localhost:3000.
```
Usage
Register User:</br> Click on the "Add User" button to open the registration modal. Fill in the form and submit to add a new user.</br>
Edit User: Click on the edit button next to a user in the user list to open the edit modal. Modify the user information and submit.</br>
Delete User: Click on the delete button next to a user in the user list to remove the user from the database.</br>
## Project Structure
![image](https://github.com/user-attachments/assets/66a7e83b-d8d9-4e07-83c3-1db2bbc4e8a2)

## API Endpoints
Backend (Express.js)</br>
POST /register: Register a new user</br>
GET /users: Get all users</br>
PUT /users/
: Update a user's information</br>
DELETE /users/:id
: Delete a user</br>

## Deployment
Backend
Set up a MongoDB instance on a cloud provider like MongoDB Atlas.</br>
Deploy the backend to a cloud provider Render.</br>
Update the MONGO_URI in your .env file to point to your cloud MongoDB instance.</br>
Frontend
Build the frontend for production:
```
npm run dev
```
Deploy the build directory to a static hosting provider Vercel.

Known Issues
When closing the modal after user registration or editing, the table may not automatically update. To fix this, the page can be refreshed or the list can be re-fetched using context.
