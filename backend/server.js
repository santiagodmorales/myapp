const express = require('express');
require('./src/database');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});



// Routes
const postRouter = require('./src/routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);