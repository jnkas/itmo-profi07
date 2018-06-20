// require ================================================================

var         express = require("express"),                   // web development framework
            mustacheExpress = require('mustache-express');  // Logic-less {{mustache}} templates
 

// express ===============================================================

var app = express();

// configure =============================================================
app.engine('mustache', mustacheExpress());       

app.set('view engine', 'mustache');               
app.set('views', __dirname + '/html');

app.use(express.static(__dirname + '/public')); 

// routes =================================================================

app.get('/', function(req, res) {
    
    res.render('master', {
            head: {
                  title: 'page title'

            },
            homepage: {
                  title: 'post title',
                  items: 'items',
                  data:"Sketches of Spain",
                  artist:"Miles Davis"
            } 
        });
    
    //res.sendFile(__dirname + '/html/master.mustache');
    });
app.post('/',function(req,res){
    res.send("Submited use's name:");
});
app.listen( 3000);
console.log('server on port 3000');
