var express = require('express');
var app = express();
var http = require('http')
var auth = require('basic-auth')
var PythonShell = require('python-shell');
var secure_vars = require('./var.js')


// app.use(express.static(__dirname + '/public'));

var options = {
  scriptPath: '/home/pi/TL/ToneLights'
};

app.get('/', function (req, res) {
    var credentials = auth(req);

    if (!credentials || credentials.name !== secure_vars.uid || credentials.pass !== secure_vars.pwd) {
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="example"');
      res.end('Access denied');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8091, function () {
    console.log('Server up');
});

app.get('/emergency', function (req, res) {
    console.log("Running EMERGENCY");
    PythonShell.run('emergency.py', options, function (err,res) {
        if (err) throw err;
        console.log('finished');
    });
    res.send(true);
});

app.get('/standby', function (req, res) {
    console.log("Setting to Standby...");
    PythonShell.run('standby.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/on', function (req, res) {
    console.log("Setting to on...");
    PythonShell.run('lightsOn.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});


app.get('/white50', function (req, res) {
    console.log("Setting to 50% white...");
    PythonShell.run('50white.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/dimWhite', function (req, res) {
    console.log("Setting to dim white...");
    PythonShell.run('dimWhite.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/WW', function (req, res) {
    console.log("Setting to warm white...");
    PythonShell.run('warmWhite.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/red', function (req, res) {
    console.log("Setting to red...");
    PythonShell.run('red.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/blue', function (req, res) {
    console.log("Setting to blue...");
    PythonShell.run('blue.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/purple', function (req, res) {
    console.log("Setting to purple...");
    PythonShell.run('purple.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/rednight', function (req, res) {
    console.log("Setting to red night light...");
    PythonShell.run('redNight.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.get('/bluenight', function (req, res) {
    console.log("Setting to blue night light...");
    PythonShell.run('blueNight.py', options, function (err) {
        if (err) throw err;
    });
    res.send(true);
});

app.use(express.static('.'));
