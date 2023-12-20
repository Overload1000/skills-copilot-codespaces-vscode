// Create web server
// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded representation of the list of comments.
// Use our new json() function to send that JSON to the client.
// Use the readFile() function to read comments.json from disk.
// Use the send() function to send the contents of comments.json to the client.
// Test your work by visiting http://localhost:3000/comments.json.
// You should see a list of comments appear in your browser window.

var http = require("http");
var fs = require("fs");
var port = 3000;

var server = http.createServer(function (req, res) {
  if (req.url === "/comments.json") {
    fs.readFile("./comments.json", function (err, data) {
      var comments = JSON.parse(data);
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(comments));
    });
  } else {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello World");
  }
});

server.listen(port, function () {
  console.log("Listening on port " + port);
});