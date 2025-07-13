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

# User Login Endpoint Documentation

## POST `/users/login`

Authenticates an existing user and returns a JWT token.

### Description

This endpoint allows a registered user to log in using their email and password. On successful authentication, a JWT token and the user object are returned.

### Request Body

Send a JSON object in the following format:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Login successful. Returns JWT and user object.            |
| 400         | Validation error. Returns details of the errors.          |
| 401         | Invalid email or password.                                |
| 500         | Internal server error.                                    |

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
  "message": "Invalid email or password"
}
```

---

# Get User Profile Endpoint Documentation

## GET `/users/profile`

Retrieves the profile information of the authenticated user.

### Description

This endpoint returns the profile details of the currently authenticated user. The request must include a valid JWT token in the cookie or Authorization header.

### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Returns the user profile (without password).|
| 401         | Unauthorized. Missing or invalid token.     |
| 404         | User not found.                             |
| 500         | Internal server error.                      |

### Example Success Response

```json
{
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
  "message": "User not found"
}
```

---

# User Logout Endpoint Documentation

## GET `/users/logout`

Logs out the authenticated user.

### Description

This endpoint logs out the current user by clearing the authentication token cookie and blacklisting the token. The request must include a valid JWT token.

### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Logout successful.                          |
| 401         | Unauthorized. Missing or invalid token.     |
| 500         | Internal server error.                      |

### Example Success Response

```json
{
  "message": "Logged out"
}
```

---

# Captain Registration Endpoint Documentation

## POST `/captains/register`

Registers a new captain (driver) in the system.

### Description

This endpoint allows a new captain to register by providing their name, email, password, and vehicle details. The password is securely hashed before being stored. On successful registration, the captain object is returned.

### Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 3 characters.
- `vehicle.capacity` (integer, required): Minimum value 1.
- `vehicle.vehicleType` (string, required): Must be one of `"car"`, `"motorcycle"`, or `"auto"`.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 201         | Captain registered successfully. Returns captain object. |
| 400         | Validation error. Returns details of the errors.         |
| 500         | Internal server error.                                   |

### Example Success Response

```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response

```json
{
  "errors": [
    {
      "msg": "Vehicle color is required",
      "param": "vehicle.color",
      "location": "body"
    }
  ]
}
```

---

# Captain Login Endpoint Documentation

## POST `/captains/login`

Authenticates an existing captain and returns a JWT token.

### Description

This endpoint allows a registered captain to log in using their email and password. On successful authentication, a JWT token and the captain object are returned.

### Request Body

Send a JSON object in the following format:

```json
{
  "email": "jane.smith@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Login successful. Returns JWT and captain object.         |
| 400         | Validation error. Returns details of the errors.          |
| 401         | Invalid email or password.                                |
| 500         | Internal server error.                                    |

### Example Success Response

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response

```json
{
  "message": "Invalid email or password"
}
```

---

# Get Captain Profile Endpoint Documentation

## GET `/captains/profile`

Retrieves the profile information of the authenticated captain.

### Description

This endpoint returns the profile details of the currently authenticated captain. The request must include a valid JWT token in the cookie or Authorization header.

### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Returns the captain profile.                |
| 401         | Unauthorized. Missing or invalid token.     |
| 500         | Internal server error.                      |

### Example Success Response

```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

# Captain Logout Endpoint Documentation

## GET `/captains/logout`

Logs out the authenticated captain.

### Description

This endpoint logs out the current captain by clearing the authentication token cookie and blacklisting the token. The request must include a valid JWT token.

### Authentication

- Requires authentication via JWT token (sent as a cookie or in the `Authorization: Bearer <token>` header).

### Responses

| Status Code | Description                                 |
|-------------|---------------------------------------------|
| 200         | Logout successful.                          |
| 401         | Unauthorized. Missing or invalid token.     |
| 500         | Internal server error.                      |

### Example Success Response

```json
{
  "message": "Logged out successfully"
}
```

---