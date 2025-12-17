# Blog API – Authors and Posts

## Project Overview

This project is a RESTful Blog API built using **Node.js**, **Express**, and **Sequelize ORM** with a **relational database (PostgreSQL/MySQL)**.
It manages **authors** and their **blog posts**, implementing a **one-to-many relationship** where one author can have multiple posts.

The API follows proper backend architecture, enforces database constraints, and avoids inefficient queries.

---

## Tech Stack

* Node.js
* Express.js
* Sequelize ORM
* PostgreSQL / MySQL
* dotenv

---

## Project Structure

```
blog-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── author.model.js
│   │   └── post.model.js
│   ├── controllers/
│   │   ├── author.controller.js
│   │   └── post.controller.js
│   ├── routes/
│   │   ├── author.routes.js
│   │   └── post.routes.js
│   └── app.js
├── .env
├── package.json
├── README.md
```

---

## Database Design

### Author Table

* id (Primary Key)
* name (string, required)
* email (string, unique, required)

### Post Table

* id (Primary Key)
* title (string, required)
* content (text, required)
* author_id (Foreign Key → authors.id)

### Relationship

* One Author → Many Posts
* Cascade delete enabled (deleting an author deletes all related posts)

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-github-repo-url>
cd blog-api
```

### 2. Install dependencies

```
npm install
```

### 3. Create database

Create a database named:

```
blogdb
```

### 4. Configure environment variables

Create a `.env` file:

```
PORT=3000
DB_NAME=blogdb
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_DIALECT=postgres
```

(Use `mysql` if you are using MySQL)

---

## Run the Application

```
node src/app.js
```

Server will start on:

```
http://localhost:3000
```

---

## API Endpoints

### Author APIs

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /authors           | Create a new author    |
| GET    | /authors           | Get all authors        |
| GET    | /authors/:id       | Get author by ID       |
| PUT    | /authors/:id       | Update author          |
| DELETE | /authors/:id       | Delete author          |
| GET    | /authors/:id/posts | Get posts of an author |

---

### Post APIs

| Method | Endpoint   | Description                         |
| ------ | ---------- | ----------------------------------- |
| POST   | /posts     | Create a post                       |
| GET    | /posts     | Get all posts (filter by author_id) |
| GET    | /posts/:id | Get post with author details        |
| PUT    | /posts/:id | Update post                         |
| DELETE | /posts/:id | Delete post                         |

---

## Key Features Implemented

* Full CRUD for Authors and Posts
* One-to-many relationship handling
* Foreign key validation
* Cascade delete
* Nested resource endpoint
* Efficient queries using eager loading
* Proper error handling (400, 404 responses)
