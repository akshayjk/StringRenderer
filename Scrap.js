var Mustache = require("./mustache");

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
    var output = Mustache.render("{{#tempObj}}{{title}} spends {{calc}}\n ", view);
}
catch(e){
    console.log(e)
}
