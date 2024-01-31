# Login && Register by @duvrdx
This library provides two components for Login and Registration. We also use OAuth2 as a means of authentication, storing the Token in store.

## Default exports

- LoginComponent
  ```typescript
  // Login component
  apiInstance: AxiosInstance, registerRedirect: string
  ```
- RegisterComponent
  ```typescript
  // Register component
  apiInstance: AxiosInstance, registerEndpoint: string
  ```
- useAuthStore
  ```typescript
  // Store operations
  getToken(): Token
  setToken(token: Token)
  resetToken()
  ```
- AuthService
  ```typescript
  // Login and refresh token using OAuth2
  login(apiInstance: AxiosInstance, username: string, password: string): Promise<Token>
  refresh(apiInstance: AxiosInstance, refreshToken: string): Promise<Token>
  ```
## Classes


### User
To use the registration component, you must implement this user model. Otherwise, use "GenericRegisterService" to implement your own registration.
```typescript
export default interface User{
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  telephone: string;
}
```

### Token
This is the default token model used by OAuth2.
```typescript
export default interface Token{
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
```

## .env
These are the environment variables that are used in the project
```javascript
CLIENT_ID: ctx.dev ? 'dev' : '', //Client ID of your OAuth server
CLIENT_SECRET: ctx.dev ? 'dev' : '', //Client Secret of your OAuth server
OAUTH_TOKEN: ctx.dev ? 'o/token' : '', // Endpoint to get the Token
OAUTH_REFRESH: ctx.dev ? 'o/refresh/' : '' // Token Refresh endpoint
```
