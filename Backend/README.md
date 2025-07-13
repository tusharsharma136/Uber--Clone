# User Registration Endpoint Documentation

## POST `/users/register`

Registers a new user in the system.

### Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. The password is securely hashed before being stored. On successful registration, a JWT token and the user object are returned.

### Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 201         | User registered successfully. Returns JWT and user object. |
| 400         | Validation error. Returns details of the errors.           |
| 500         | Internal server error.                                     |

### Example Success Response

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---