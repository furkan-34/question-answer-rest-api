# question-answer-rest-api
It's a restful api with async await structure on Node JS.

# User
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/user | `GET` | Empty | List all users. |
| /api/user/:id | `GET` | Empty | List user's information with its id. |




# Auth
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/auth/profile | `GET` | Empty | Sends User's information on JSON. |
| /api/auth/register | `POST` | {'name':'Furkan Cigerlioglu', 'email':'foo@gmail.com', 'password':'123456'} | Create a new user. |
| /api/auth/edit | `POST` | {'name':'Furkan Cigerlioglu', 'email':'foo@gmail.com', 'password':'123456'}  | Edit information of user with its token. |
| /api/auth/upload | `POST` | Key: 'profile_image' Value: image file | Upload a image for profile. |
| /api/auth/login | `POST` | {'email':'furkan@gmail.com', 'password':'123456'} | Log in. |
| /api/auth/logout | `GET` | Empty | Log out. |
| /api/auth/forgotpassword | `POST` | {'email:'furkan@gmail.com'} | Sends reset link to email. |
| /api/auth/resetpassword?resetPasswordToken="Reset Password Token" | `POST` | {'password:'12345678'} | Resets password with token. |





 
# Questions
 
