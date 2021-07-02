# NERDS stack

### Dev Setup - Backend
* Install dependencies using npm i
* Install nodemon globally if you don't already have it
* Install PostgreSQL & run it (requires the password you created during installation)
* Add database access credentials to db.js - recommend installing npm dotenv & using .env to hide credentials if commiting to Github
* Postgresql shell commands: \l list all databases. \c database1 connect to database1. \dt inspect tables. \d+ inspect table & show relation information. \q to quit
* From root run nodemon server for a dev server
* http://localhost:5000/ can be accessed for CRUD operations such as POST, GET, PUT, DELETE etc. using Postman

### Dev Setup - Frontend
* Change to client directory
* Install dependencies using npm i.
* run npm start. Frontend will open at http://localhost:3000/

/* ========= IGNORE THIS ========= */
* from root: git rm --cached client -f
