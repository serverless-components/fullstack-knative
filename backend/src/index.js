const express = require('express')
const url = require('url');
const app = express()

app.get('/', (req, res) => {
  console.log('Received a request.')

  const queryObject = url.parse(req.url,true).query;
  const name = queryObject.name || process.env.NAME || 'Knative User'

  console.dir(queryObject)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(`{ "origin": "OpenShift Serverless", "greeting": "Welcome ${name} !"}`);
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('"Knative Fullstack Backend Echoer" is listening on port', port)
})
