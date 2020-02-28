/*//global variables
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '3000';

fs.readFile('index.html', (err, html) =>{
    if(err){
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    
    server.listen(port, hostname, () => {
        console.log('Server started on port ' +port);
    });
});*/

var numbers = [9, 2, 5, 4, 12, 7];
var numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];

function standardDeviation (n) {
    var sum = 0;
    var sumDiff = 0;
    for (i = 0; i < n.length; i++) {
        sum += n[i];
    }
    var avg = sum / n.length;
    console.log(avg);
    for (i = 0; i < n.length; i++) {
        console.log(sumDiff);
        sumDiff += (n[i] - avg)**2
        console.log(sumDiff);
    }
    
    var stdDeviation = (1/(n.length - 1)*sumDiff)**(1/2);
    console.log(stdDeviation);
    for (i = 0; i < n.length; i++) {
    }
}

standardDeviation(numbers);
standardDeviation(numbersTwo);



