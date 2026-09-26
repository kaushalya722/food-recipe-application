const express = require('express');
const dotenv = require('dotenv').config()
const App = express();
const connectionDB = require('./config/connectionDB')
const cors = require("cors");
const PORT = process.env.PORT || 3000;

App.use(express.json())
App.use(cors())
App.use('/recipe', require("./routes/recipe"))
connectionDB();





App.listen(PORT, () => console.log(`Server is running on port ${PORT}`));