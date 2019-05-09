var express = require('express'),
    path = require('path');
var request = require('request');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(port, function(req, res){
    console.log('Server is running at port: ', port);
});

app.get('/', (request, response) => {
    response.render('index');
})

app.post('/send', (request, response) => {
    
    var token = "P5cXGRPufjRGm23q24jEMkqre6ytkNv3hhy05ipoLeL";
    let queryData = {
          'message': 'Test', // sender address
          'stickerPackageId': 2,
          'stickerId': 34
      };
    notify_message(token, queryData);
})

function notify_message(token, queryData) {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': 'Bearer {'+ token +'}'
    }

    var options = {
        url: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        headers: headers,
        auth: {
            bearer: token
        },
        form: {
            message: 'testtt jaaa',
            'stickerPackageId': 2,
            'stickerId': 159
        }
    }

    request.post(options, (err, res, body) => {
        if (err) {
           //if error
        } else {
            console.log('status = ' + res.statusCode);
        }
    });
    
}