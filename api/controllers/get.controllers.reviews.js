const json = require('../mocks/reviews.json')

module.exports = (req, res) => {
  return res.json(json.reviews)
}