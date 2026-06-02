const json = require('../moks/reviews.json')

module.exports = (req, res) => {
  return res.json(json.reviews)
}