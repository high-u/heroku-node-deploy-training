var webclient = require("request");
var os = require('os');
var hostname = os.hostname();
webclient.get({
  url: "https://node-red-docker-fdelqzqlup.now.sh/api/heroku?id=123&host=" + hostname,
  qs: {
    testkey: "testvalue",
    hoge: "hoge"
  }
}, function (error, response, body) {
  console.log(body);
});
