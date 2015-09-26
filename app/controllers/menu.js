var express = require('express'),
  router = express.Router();
  



module.exports = function (app) {
  app.use('/', router);
};

router.get('/menu', function (req, res, next) {
    
    res.render('menu');

});
