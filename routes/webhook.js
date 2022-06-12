var express = require('express');
var router = express.Router();

router.post('/connections', function (req, res, next) {
  console.log(req.body);
  state = req.body?.rfc23_state;
  switch (state) {
    case "invitation-sent":
      console.log("Invitation created");
      console.log("Connection=", req.body?.connection_id);
      break;
    case "request-received":
      console.log("Invitation request");
      console.log("Connection=", req.body?.connection_id);
      break;
    case "response-sent":
      console.log("Invitation Response");
      console.log("Connection ID=", req.body?.connection_id);
      break;
    case "completed":
      console.log("Connection complete");
      console.log("Connection ID=", req.body?.connection_id);
      break;
    case "undefined":
      console.log("Connection state not recognized");
      console.log("Connection ID=", req.body?.connection_id);

  }
  res.status(200).send("OK");
});

module.exports = router;
