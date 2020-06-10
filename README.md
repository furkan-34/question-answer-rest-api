# question-answer-rest-api
It's a restful api with async await structure on Node JS.

# User
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/user | `GET` | Empty | List all users. |
| /api/movies | `POST` | {'name':'Furkan Cigerlioglu', 'email':'foo@gmail.com', 'password':'123456'} | Create a new user. |

 
# Questions
 
# Index
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /auth/tokenTest | `GET` | { bearer: {{access_token}} } | Control a token. |