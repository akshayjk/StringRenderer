/**
 * Created by Akshay on 24-01-2015.
 */

var DataModel = require("./DataModel.js");

var MetaJSON = DataModel.MetaJSON;


function ActionTagFunction(){
    //gives back the DataModel address
}

ActionTagFunction.prototype.repeat = function(Address){
    //returns the DataModel for Iteration
    console.log("Getting the model " + JSON.stringify(MetaJSON[Address]))
    return MetaJSON[Address];
};