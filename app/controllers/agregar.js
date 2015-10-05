var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Comida = mongoose.model('Comida'),
  cloudinary = require('cloudinary'),
  multer = require('multer');



  cloudinary.config({
  	cloud_name: "dagby4tpi",
  	api_key: "448881611674699",
  	api_secret: "KjHWVtHc3b4SS7VmfF1yK3lNxp4"
  });



module.exports = function (app) {
  app.use('/', router);
  app.use(multer({dest: "./uploads"}));
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

			console.log(solicitud.files);

			/*producto.save(function(err){
				////objeto json en la database
				console.log(producto);
				respuesta.render('menu/new',{
					password: "correcto"
				});
			});*/

	}else{
		respuesta.render('menu/new',{
			password: "incorrecto"
		});
	}


});