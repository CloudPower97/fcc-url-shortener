require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
var cors = require('cors');
const shorturlRouter = require('./routes/shortner');

const { MONGO_URI } = process.env;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const app = express()
      .use(helmet())
      .use(cors())
      .use(express.json())
      .use(
        express.urlencoded({
          extended: false
        })
      );

    app.get('/', (req, res, next) => {
      res.redirect(301, 'https://www.google.it');
    });

    app.use('/api/shorturl', shorturlRouter);

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
