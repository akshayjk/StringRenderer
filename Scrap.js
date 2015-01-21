var Mustache = require("./mustache");
var xml2js = require("xml2js");
var xml = '<akshay isRepeat="true">this is the {{data}}<name class="single">my name is akshay \n</name></akshay>';
var viewNew;
xml2js.parseString(xml, function (err, result) {
    viewNew = result;
    console.log(JSON.stringify(result));
});

var view = {tempObj:[
    {
        title: "Joe",
        calc: function () {
            return 2 + 4;
        }
    },
    {
        title: "Akshay",
        calc: function () {
            return 2 + 4;
        }
    }
]};
try{
    var output = Mustache.render("{{#tempObj}}{{title}} spends {{calc}}\n {{/tempObj}} ", view);
    console.log(output)
}
catch(e){
    console.log(e)
}
