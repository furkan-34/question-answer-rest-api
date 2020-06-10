# question-answer-rest-api
It's a restful api with async await structure on Node JS.

# User
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/user | `GET` | Empty | List all users. |
| /api/user/:id | `GET` | Empty | List user's information with its id. |

# Admin
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/admin/block/:id | `GET` | Empty | Toggle block status of user. |
| /api/admin/user/:id | `DELETE` | Empty | Delete user with its questions. |




# Auth
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/auth/profile | `GET` | Empty | Sends User's information on JSON. |
| /api/auth/register | `POST` | {'name':'Furkan Cigerlioglu', 'email':'foo@gmail.com', 'password':'123456'} | Create a new user. |
| /api/auth/edit | `PUT` | {'name':'Furkan Cigerlioglu', 'email':'foo@gmail.com', 'password':'123456'}  | Edit information of user with its token. |
| /api/auth/upload | `POST` | Key: 'profile_image' Value: image file | Upload a image for profile. |
| /api/auth/login | `POST` | {'email':'furkan@gmail.com', 'password':'123456'} | Log in. |
| /api/auth/logout | `GET` | Empty | Log out. |
| /api/auth/forgotpassword | `POST` | {'email:'furkan@gmail.com'} | Sends reset link to email. |
| /api/auth/resetpassword?resetPasswordToken="Reset Password Token" | `POST` | {'password:'12345678'} | Resets password with token. |





 
# Questions
 

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/questions | `GET` | Empty | Lists all questions on JSON format. |
| /api/questions/ask | `POST` | {'title':'Furkan Cigerlioglu', 'content':'foo@gmail.com'} | Create a new question. |
| /api/questions/:id | `GET` | Empty | List question with its id. |
| /api/questions/:id/edit | `PUT` | {'title':'Furkan Cigerlioglu', 'content':'foo@gmail.com'} | Update question if user is owner it. |
| /api/questions/:id/delete | `DELETE` | {'title':'Furkan Cigerlioglu', 'content':'foo@gmail.com'} | Delete question if user is owner it. |
| /api/questions/:id/like | `GET` | Empty | Add user's id at likes of question. |
| /api/questions/:id/undo_like | `GET` | Empty | Remove user's id from likes of question. |

 
# Answers
 

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/questions/:question_id/answers | `POST` | {'content':'This is an answer'} | Create a new answer of a question with its id. |
| /api/questions/:question_id/answers | `GET` | Empty | Lists all answers of question on JSON format. |
| /api/questions/:question_id/answers/:answer_id | `GET` | Empty | Get single answer information of question on JSON format. |
| /api/questions/:question_id/answers/:answer_id/edit | `PUT` | {'content':'This is new content of answer'}  | Update Content of answer. |
| /api/questions/:question_id/answers/:answer_id/delete | `DELETE` | Empty  | Delete an answer. |
| /api/questions/:question_id/answers/:answer_id/like | `GET` | Empty  | Add user's id at likes of answer. |
| /api/questions/:question_id/answers/:answer_id/undo_like | `GET` | Empty  | Remove user's id from likes of answer. |





