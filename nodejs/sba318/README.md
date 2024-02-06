# Bookshelf Application

This is a simple Node and Express server application for managing a book collection. Users can view, add, update, and delete books from their bookshelf.

## Project Structure

- `/public`: Contains static files (CSS).
- `/views`: Contains EJS templates.
- `app.js`: Main entry point for the application.
- `/middleware`: Custom middleware.
- `/routes`: Route handlers for different data categories.
- `/data`: JSON files for storing data.
- `README.md`: Project documentation.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the application: `npm start`


### Endpoints

- `GET /books`: Get all books.
- `GET /books/:id`: Get a specific book by ID.
- `POST /books`: Add a new book.
- `PUT /books/:id`: Update a specific book by ID.
- `DELETE /books/:id`: Delete a specific book by ID.

### Query Parameters

- `/books?genre=Fantasy`: Filter books by genre.

### Views

- `/`: Rendered view displaying the bookshelf.
- Form for adding new books.


## Notes

- Data is stored in a JSON file (`books.json`).
