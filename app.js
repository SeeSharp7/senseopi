var Gpio = require('onoff').Gpio,
  power = new Gpio(17, 'in');
  coff1 = new Gpio(18, 'in'),
  coff2 = new Gpio(27, 'in');
var express = require('express')
var app = express()

app.get('/power', function (req, res) {
	power.setDirection('out');
	console.log('power invoked');
	setTimeout(function (){ power.setDirection('in');
	}, 1000);
	res.send('PowerSwitch invoked');
}),
app.get('/coffee', function (req, res) {
	coff1.setDirection('out');
	console.log('big coffee invoked');
	setTimeout(function (){ coff1.setDirection('in');
	}, 1000);
	res.send('BigCoffeSwitch invoked');
}),
app.get('/smallcoffee', function (req, res) {
	coff2.setDirection('out');
	console.log('small coffee invoked');
	setTimeout(function (){ coff2.setDirection('in');
	}, 1000);
	res.send('SmallCoffeSwitch invoked');
})
var server = app.listen(3000, function () {
    
})
