const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/state/geojson', async (req, res) => {
  try {
    console.log('hey yo');
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
