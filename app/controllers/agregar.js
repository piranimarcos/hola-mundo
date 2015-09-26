var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');
  Comida = mongoose.model('Comida');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/menu/new', function (solicitud, respuesta) {
    
    respuesta.render('menu/new');

});

router.post('/menu', function (solicitud, respuesta) {

//objeto json sin entrar en la database
    console.log(solicitud.body);
	if (solicitud.body.password == "1234") {

			var data = {
				titulo: solicitud.body.titulo,
				descripcion: solicitud.body.descripcion,
				costo: solicitud.body.costo,
				imagen: "data.png"
			}

			var producto = new Comida(data);

			producto.save(function(err){
				////objeto json en la database
				console.log(producto);
				respuesta.render('menu/new',{
					password: "correcto"
				});
			});

	}else{
		respuesta.render('menu/new',{
			password: "incorrecto"
		});
	}


});