var express = require('express'),
  router = express.Router()

module.exports = function (app) {
  app.use('/', router);
};

router.get('/contacto', function (req, res, next) {
    
    res.render('contacto');

});