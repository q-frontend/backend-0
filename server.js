const http = require("node:http");
const hostname = "127.0.0.1"; //local host is same
const port = 3000; //port 21,23,80,443 no
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World Hoi dan it voi quang ta");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
