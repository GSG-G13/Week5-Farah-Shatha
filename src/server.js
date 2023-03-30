/*const http = require("http");
const router = require("./router");
require('dotenv').config();

const server = http.createServer(router);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server listen on post ${PORT}`));*/
const express = require("express");
const router = require("./router");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => console.log(`server listen on post ${PORT}`));
