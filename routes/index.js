const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res) => {
    const page = req.query.page || 1
    Pet.findOne()
      .then((pet) => {
        console.log(pet)
      })
    Pet.paginate({}, { page: page }).then((results) => {
      console.log(results)
      res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
    });
  });
}
