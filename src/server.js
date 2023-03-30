
const express = require("express");
const router = require("./router");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => console.log(`server listen on post ${PORT}`));
