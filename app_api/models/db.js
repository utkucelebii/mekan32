var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://mekan32:mekan32@mekan32.wqzoj.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function(){
	console.log('Mongoose ' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error', function(err){
console.log('Mongoose bağlantı hatası \n:' + err);
});

mongoose.connection.on('disconnected', function(){
console.log('Mongoose bağlantı kesildi \n');
});

kapat = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose kapatıldı \n' + msg);
		callback();
	});
};

// nodemon kapandığında
process.once('SIGURSR2', function(){
	kapat('nodemon kapatıldı \n', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

// uygulama kapandığında
process.once('SIGINT', function(){
	kapat('uygulama kapatıldı \n', function(){
		process.exit(0);
	});
});

// nodemon
process.once('SIGTERM', function(){
	kapat('heroku kapatıldı \n', function(){
		process.exit(0);
	});
});

require('./mekansema');