## ababa.tech-backend

#### Technologies used

- **`ExpressJS`** for creating HTTP server. _`Documentation`_ [ExpressJS](https://expressjs.com/)</br>
- **`Mongoose`** is Object Data Modeling (ODM) library for MongoDB. _`Documentation`_ [Mongoose](https://mongoosejs.com/)</br>
- **`jsonwebtoken`** for decoding, verifing and generating JSON Web Token. _`Documentation`_ [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md)</br>
- **`Bcrypt`** for hashing passwords. _`Documentation`_ [bcryptJS](https://github.com/kelektiv/node.bcrypt.js/blob/master/README.md)

#### Scripts

Use `npm build` to build server for deployment.</br>
Use `npm start` to start server.</br>
Use `npm run start:dev` to start server in development mode.</br>

#### Installation

Use `npm install` to install all dependencies.</br>

#### Env File

At the root folder create .env file</br>
_Copy and paste below provided info_

> PORT=8000</br>
> MONGO_DB_URI=mongodb+srv://Juozas:YRpjXD6ZAy57OcUy@ababatech.6azbj7p.mongodb.net/?retryWrites=true&w=majority</br>
> SECRET_KEY=57OcUy

#### Usage

Use `npm start` to start server.</br>

> Terminal should show

```
Server started on PORT: 8000
Successfully connected to database
```
