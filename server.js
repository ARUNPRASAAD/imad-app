var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var app = express();
app.use(morgan('combined'));

/*var config={
    user: 'arunprasaadc',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  database: 'arunprasaadc',
 // password: process.env.DB_PASSWORD,
 password:'db-arunprasaadc-94273'
};

var Pool=new Pool(config);
app('/user', function(req,res){
    pool.query('select * from user', function(err, results){
        if(err){
           res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.row));
        }
        
        
    });
    
    
    
});*/

 var counter=0;
app.get('/counter', function(req,res){
   
    counter=counter+1;
    res.send(counter.toString());
    
});
var names=[];
app.get('/submit',function(req,res){
    var name= req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
    
});

var articles={
        'article-one' :{
        title : 'arun-one',
        content :`<table>
            <tr>
                <td>
                    my first table
                </td>
                <td>
                   my second table
                </td>
            </tr>
        
        </table>`
            
        },
        'article-two' :{
        title : 'arun-two',
        content :`<table>
            <tr>
                <td>
                    my two first table
                </td>
                <td>
                   my two second table
                </td>
            </tr>
        
        </table>`
            
        },
        'article-Three' :{
        title : 'arun-three',
        content :`<table>
            <tr>
                <td>
                    my three first table
                </td>
                <td>
                   my three second table
                </td>
            </tr>
        
        </table>`
            
        }
    
};
function myfunction(data){
        var title= data.title;
        var content= data.content;
        var htmltemplate=`
        <!doctype html>
            <html>
                <head>
                    <title>
                    ${title}
                    </title>
                    <style>
                        table{
                           border:1px solid red;
                           
                            
                        }
                    </style>
                </head>
                    <body>
                    ${content}
                    </body>
            </html>
        
        
        `;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) {
    var articleName= req.params.articleName;
  // var articleName='article-one';
    res.send(myfunction(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function(req, res){
    
    res.sendFile(path.join(__dirname, 'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
