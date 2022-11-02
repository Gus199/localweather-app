const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// stats page
app.get('/stats', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/stats.html'))
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
