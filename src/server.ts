const express = require('express');
const app = express();

const port = 3010; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello nodejs!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
