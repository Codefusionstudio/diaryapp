require ("dotenv").config();
const express = require("express");
const app = express();
const cors = require ("cors");

//Middlewares
app.use(express.json());
app.use(cors());

//declaration on port and its calling
const port = process.env.PORT|| 8080;
app.listen (port, () => console.log(`Listening on Port ${port}...`));