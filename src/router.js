const express = require('express');
const path = require('path');
const countriesJson = require('./countries.json');
const app = express();


app.get('/countries/:value', (req, res) => {
  let value = req.params.value.toLowerCase();
  let filteredCountries = countriesJson.filter((country) =>
    country.toLowerCase().includes(value)
  );
  res.json(filteredCountries);

});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

module.exports = app;
