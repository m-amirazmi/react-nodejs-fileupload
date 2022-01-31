require("dotenv").config();
const express = require("express");
const { SERVER_PORT } = require("./utils/configs");

const app = express();
app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`));
