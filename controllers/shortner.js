const URLModel = require('../models/URL');
const urlExists = require('url-exists');

exports.getShortUrl = (req, res) => {
  const { id } = req.params;

  URLModel.findById(id)
    .then(({ original_url }) => {
      res.redirect(original_url);
    })
    .catch(error => {
      res.json({ error });
    });
};

exports.postUrl = (req, res) => {
  const {
    protocol,
    hostname,
    baseUrl,
    body: { url: original_url }
  } = req;

  urlExists(original_url, (err, exists) => {
    if (exists) {
      new URLModel({ original_url })
        .save()
        .then(({ id }) => {
          res.json({
            original_url,
            short_url: `${protocol}://${hostname}${baseUrl}/${id}`
          });
        })
        .catch(error => {
          res.json({ error });
        });
    } else {
      res.json({
        error: 'Invalid URL'
      });
    }
  });
};
