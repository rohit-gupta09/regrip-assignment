# Note-Taking API with Tags and Query Features

This is a RESTful API for a note-taking application developed using Node.js and Express.js. The API allows users to create, read, update, and delete notes, manage tags for each note, and perform complex queries based on these tags.

## Features

- **Basic Note Operations**: Create, read, update, and delete notes.
- **Tag Management**: Add, update, and remove tags from notes.
- **Logical Querying**: Retrieve notes based on complex tag-based queries.

## Requirements

- Node.js
- Express.js

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/note-taking-api.git
    cd note-taking-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```

The server will start at `http://localhost:3000`.

## API Endpoints

### Basic Note Operations

1. **Create a new note**
    - **URL**: `/notes`
    - **Method**: `POST`
    - **Headers**: `Content-Type: application/json`
    - **Body**:
      ```json
      {
        "title": "First Note",
        "content": "This is the first note",
        "tags": ["tag1", "tag2"]
      }
      ```

2. **Retrieve all notes**
    - **URL**: `/notes`
    - **Method**: `GET`

3. **Retrieve a single note by ID**
    - **URL**: `/notes/:id`
    - **Method**: `GET`

4. **Update a note by ID**
    - **URL**: `/notes/:id`
    - **Method**: `PUT`
    - **Headers**: `Content-Type: application/json`
    - **Body**:
      ```json
      {
        "title": "Updated First Note",
        "content": "This is the updated first note",
        "tags": ["tag1", "tag3"]
      }
      ```

5. **Delete a note by ID**
    - **URL**: `/notes/:id`
    - **Method**: `DELETE`

### Tag Management

1. **Add tags to a note**
    - **URL**: `/notes/:id/tags`
    - **Method**: `PUT`
    - **Headers**: `Content-Type: application/json`
    - **Body**:
      ```json
      {
        "tags": ["tag4", "tag5"]
      }
      ```

2. **Remove tags from a note**
    - **URL**: `/notes/:id/tags`
    - **Method**: `DELETE`
    - **Headers**: `Content-Type: application/json`
    - **Body**:
      ```json
      {
        "tags": ["tag2"]
      }
      ```

### Querying

1. **Retrieve notes based on a logical tag query**
    - **URL**: `/notes/query`
    - **Method**: `POST`
    - **Headers**: `Content-Type: application/json`
    - **Body**:
      ```json
      {
        "query": {
          "and": [
            { "tag": "tag3" },
            { "not": { "tag": "tag4" } }
          ]
        }
      }
      ```

## Testing with Postman

1. **Create a new note**
    - **Request Type**: `POST`
    - **URL**: `http://localhost:3000/notes`
    - **Headers**:
      - Key: `Content-Type`
      - Value: `application/json`
    - **Body**:
      ```json
      {
        "title": "First Note",
        "content": "This is the first note",
        "tags": ["tag1", "tag2"]
      }
      ```
    - **Send Request**: Click `Send`

2. **Retrieve all notes**
    - **Request Type**: `GET`
    - **URL**: `http://localhost:3000/notes`
    - **Send Request**: Click `Send`

3. **Retrieve a single note by ID**
    - **Request Type**: `GET`
    - **URL**: `http://localhost:3000/notes/1` (assuming the note ID is `1`)
    - **Send Request**: Click `Send`

4. **Update a note by ID**
    - **Request Type**: `PUT`
    - **URL**: `http://localhost:3000/notes/1` (assuming the note ID is `1`)
    - **Headers**:
      - Key: `Content-Type`
      - Value: `application/json`
    - **Body**:
      ```json
      {
        "title": "Updated First Note",
        "content": "This is the updated first note",
        "tags": ["tag1", "tag3"]
      }
      ```
    - **Send Request**: Click `Send`

5. **Delete a note by ID**
    - **Request Type**: `DELETE`
    - **URL**: `http://localhost:3000/notes/1` (assuming the note ID is `1`)
    - **Send Request**: Click `Send`

6. **Add tags to a note**
    - **Request Type**: `PUT`
    - **URL**: `http://localhost:3000/notes/2/tags` (assuming the note ID is `2`)
    - **Headers**:
      - Key: `Content-Type`
      - Value: `application/json`
    - **Body**:
      ```json
      {
        "tags": ["tag4", "tag5"]
      }
      ```
    - **Send Request**: Click `Send`

7. **Remove tags from a note**
    - **Request Type**: `DELETE`
    - **URL**: `http://localhost:3000/notes/2/tags` (assuming the note ID is `2`)
    - **Headers**:
      - Key: `Content-Type`
      - Value: `application/json`
    - **Body**:
      ```json
      {
        "tags": ["tag2"]
      }
      ```
    - **Send Request**: Click `Send`

8. **Query notes based on tags**
    - **Request Type**: `POST`
    - **URL**: `http://localhost:3000/notes/query`
    - **Headers**:
      - Key: `Content-Type`
      - Value: `application/json`
    - **Body**:
      ```json
      {
        "query": {
          "and": [
            { "tag": "tag3" },
            { "not": { "tag": "tag4" } }
          ]
        }
      }
      ```
    - **Send Request**: Click `Send`

## Code Overview

- **server.js**: Sets up the Express server and routes.
- **routes/route.js**: Contains all the routes for managing notes and tags.



