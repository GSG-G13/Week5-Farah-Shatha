import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/search', (req, res) => {
  const accessKey = '6aLc2g_FnKCMK7lDo6WWCQmBiSfXRsXMycs2SHwr0o0';
  const searchTerm = req.query.q;

  fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => console.error(error));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
