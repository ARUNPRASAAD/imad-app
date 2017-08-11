var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
title : `arun-one`,
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
    
};
function myfunction(data){
    var title= data.title;
    var content= data.content;
var htmltemplate=`
<!doctype html>
    <html>
        <head>
        ${title}
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

app.get('/article-one', function(req,res) {
    res.send(myfunction(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
