var express = require('express');
var router = express.Router();
const axios = require('axios')

router.get('/', async function(req, res, next) {
  restEndpoint = 'http://18.219.146.82:8080';
  restURL = restEndpoint + '/connections';
  restData = {};
  restHeaders = {headers: {}};
  conns = await axios.get(restURL, restData, restHeaders);
  console.log("Connections=", conns.data);
  res.status(200).send(conns.data);
});

router.post('/acceptrequest', async function(req, res, next) {
  restEndpoint = 'http://18.219.146.82:8080';
  restURL = restEndpoint + '/connections/' + req.body?.connection_id + '/accept-request?my_endpoint=' + encodeURI(restEndpoint);
  restData = {};
  restHeaders = {
    headers: {
    }
  };
  status = await axios.post(restURL, restData, restHeaders);
  console.log("Status=", status.data);
  res.status(200).send(status.data);
});

module.exports = router;




