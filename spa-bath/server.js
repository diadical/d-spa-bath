var express = require('express');
var exphbs  = require('express-handlebars');

var port = process.env.port || 3000;
var application = process.argv[2];
var app = express();
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    res.render('tester', {
        showTitle: true,
        application: application,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
});

app.listen(port, function () {

  console.log('Example app listening at http://localhost:%s', port);
});
