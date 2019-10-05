var request = require('request');

request('https://jsonplaceholder.typicode.com/users/', function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        console.log(data);
    }
});