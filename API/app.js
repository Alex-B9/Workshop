const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();

const taskRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

module.exports = app;