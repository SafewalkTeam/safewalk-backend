import express from 'express';
import config from '../config';

const app = express();

/**
 * endpoint to access geodata per user and city
 */
app.get('/fullgeodata/:userid/:city', (req, res) => {
  res.send("must be implemented");
});

app.get('/geodatarange/:userid/:city/:range', (req, res) => {
  res.send("must be implemented")
});

app.get('/', (req, res) => {
  res.send('you are here: \/');
})

app.listen(config.development.port, () => {
  console.log(`Server is running at ${config.development.port}`)
});