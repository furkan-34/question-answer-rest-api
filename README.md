[![Build Status](https://api.travis-ci.org/furkan-34/question-answer-rest-api.svg?branch=master&status=passed)](https://travis-ci.org/github/furkan-34/question-answer-rest-api)
# question-answer-rest-api
It's a restful api with async await structure on Node JS.
Used Express.js and mongoose.
Includes CRUID Operations with authorization using JWT and admin/user parameters.
Includes Image Upload proccess also.
All important config settings can be change at config.env (under config/env folder).

For upload whole answers, questions and users data to mongoDB, please use command below at terminal:
```
npm run import
```

For delete whole answers, questions and users data to mongoDB, please use command below at terminal:
```
npm run delete
```

# User
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/user | `GET` | Empty | List all users. |
| /api/user/:id | `GET` | Empty | List user's information with its id. |
| /api/user?limit=10 | `GET` | Empty | Lists all users up to 10 pieces on JSON format. |
| /api/users?page=2 | `GET` | Empty | Lists all users with page format on JSON data format. |
| /api/users?search=userName | `GET` | Empty | Search a user with query and response on JSON data format. |

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
| /api/auth/forgotpassword | `POST` | {'email:'furkancigerlioglu@gmail.com'} | Sends reset link to email. |
| /api/auth/resetpassword?resetPasswordToken="Reset Password Token" | `POST` | {'password:'12345678'} | Resets password with token. |



 
# Questions
 

| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/questions | `GET` | Empty | Lists all questions on JSON format |
| /api/questions?limit=10 | `GET` | Empty | Lists all questions up to 10 pieces on JSON format. |
| /api/questions?page=2 | `GET` | Empty | Lists all questions with page format on JSON data format. |
| /api/questions?search=QuestionName | `GET` | Empty | Search a question with query and response on JSON data format. |
| /api/questions?sortBy=most-answered | `GET` | Empty | Lists most answered questions on JSON format. |
| /api/questions?sortBy=most-liked | `GET` | Empty | Lists most liked questions on JSON format. |
| /api/questions/ask | `POST` | {'title':'New Question Title', 'content':'Content Text'} | Create a new question. |
| /api/questions/:id | `GET` | Empty | List question and answers of question with its id. |
| /api/questions/:id/edit | `PUT` | {'title':'Question Title', 'content':'Content Text'} | Update question if user is owner it. |
| /api/questions/:id/delete | `DELETE` | EMPTY | Delete question if user is owner it. |
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





