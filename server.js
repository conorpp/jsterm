/* my big server */

S = require('./../CORE/lib/settings').app('conorpp.com');
express = require('express');
app = express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.configure(function () {
    app.use('/static', express.static(__dirname ));
    app.use(express.static(__dirname ));
    app.set('views', __dirname );
});

app.listen(S.port);

app.get('/',function(req, res){
    res.render('index'); 
});

app.get('/*',function(req, res){
    res.render('404'); 
});


console.log('Server listening on '+S.port);



