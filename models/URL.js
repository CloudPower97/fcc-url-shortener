const { Schema, model } = require('mongoose');
const shortid = require('shortid');

const urlSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  original_url: String
});

module.exports = model('URL', urlSchema);
