/**
 * Created by 385382 on 1/19/2015.
 */
/**
 * Created by 290494 on 8/20/2014.
 */

// Node Modules
var express = require('express'),
    app = express(),
    fs = require('fs'),
    xml2js = require('xml2js');


// Developed Files

var renderer = require('./RenderFile.js');

app.post("/postXml", function (req, res) {
    var body = "";
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        //console.log("info", body);
        var postData = body;
        //res.send(postData);
        xml2js.parseString(postData, function(err, result){
            //res.send(result);
            console.log("result " + JSON.stringify(result));
            new renderer().renderString(postData, req, res);
        });

        //new renderer().renderString(postData, req, res);

    });
});

app.get("/uploadLink", function (req, res) {
    winston.log("info", "request received ")
    //var responseHTML = '<html><head><title>upload</title></head><body><formaction="http://www.google.com"enctype="multipart/form-data"method="GET"><inputtype="file"name="upload"><br><inputtype="submit"value="upload"></form></body></html>';
    //res.setHeader("Content-Type", "text/html");
    res.sendfile('./Upload.html');
})

app.listen(5858);
