/**
 * Created by Akshay on 24-01-2015.
 */


//Node modules
var fs = require('fs');
var xml2js = require('xml2js');

//App Modules

var define = require("./define.js"),
    InnerTagFunctions = require("./innerTagFunctions.js"),
    DataModel = require("./DataModel.js");

var Warnings = [];

function StringRenderer() {

}

StringRenderer.prototype.renderString = function (Str, req, res) {

    xml2js.parseString(Str, function (err, result) {
        //console.log("result " + JSON.stringify(result));
        if(result==undefined || result==""){
            console.log("Incorrect xml or blank input");
            res.send("Incorrect xml or blank input");
        }else{
            var RenderedStringAnswer = renderObject(result);
            fs.writeFile("AppInstanceTesting.m", RenderedStringAnswer, function (err) {
                if (err) {
                    //console.log("err while  writing file")
                } else {
                    //console.log("file has been written")
                }
            });
            console.log("sending response " + RenderedStringAnswer)
            res.send(RenderedStringAnswer)
        }


    })
};

var TheObject = {"renderFile": {"div": ["\n//ApInstance", "\n//AppInstance.m", "\n#import \"AppInstance.h\"", {"_": "\n#import \"{{ORCHESTRATION_NAME}}.h\"", "$": {"Model": "META_TABLE"}}, "\n@interface AppInstance ()\n{\nNSDictionary *opDictionary;\n}\n-(void)getInstance;\n\n@end\n\n@implementation AppInstance\n\n- (id)init\n{\nself = [super init];\nif (self) {\n[self getInstance];\n}\nreturn self;\n}\n\n+(id)sharedInstance\n{\nstatic AppInstance *staticInstance;\nstatic dispatch_once_t onceToken;\ndispatch_once(&onceToken, ^{\nstaticInstance = [[AppInstance alloc] init];\n});\nreturn staticInstance;\n}\n\n-(void)getInstance\n{\nopDictionary = @{\n    ", {"_": "@\"{{ORCHESTRATION_NAME}}\":[[{{ORCHESTRATION_NAME}} alloc]init],\n    ", "$": {"Model": "META_TABLE"}}, "};\n    ", "}\n    ", {"_": "\n-(id)get{{ORCHESTRATION_NAME}}Resource\n{\nreturn [opDictionary objectForKey:@\"{{ORCHESTRATION_NAME}}\"];\n}\n    ", "$": {"Model": "META_TABLE"}}, "\n@end\n    "]}};

function renderObject(RenderObj) {
    var renderedString = '';
    if (typeof(RenderObj) == "string") {
        console.log('renderObj is str ' + RenderObj)
        renderedString += RenderObj;
    } else if (typeof(RenderObj) == "object") {
        console.log("RenderObjec " + JSON.stringify(RenderObj))
        if (Array.isArray(RenderObj)) {
            // render Array
            console.log("Arraaaayyyyy")
            RenderObj.forEach(function (RenderObjElement) {
                renderedString += renderObject(RenderObjElement);
            })
        } else {
            console.log("Object " + JSON.stringify(RenderObj))
            //render Object
            /*
             * 1. "_" contains the line to render
             * 2. "$" contains the action to perform on the string  to render
             * 3. Any other extra tag should be then considered as the object to render
             *
             * Process would be as follows :
             * Get the Object, find if it has any action --> get the Data Model or any other thing
             *
             *
             */

            //within object if there is any other object
            var ObjectKeys = Object.keys(RenderObj);
            var InnerRenderedString='';
            for (var j = 0; j < ObjectKeys.length; j++) {
                if (ObjectKeys[j] != "_" && ObjectKeys[j] != "$") {

                    InnerRenderedString += renderObject(RenderObj[ObjectKeys[j]]);
                    console.log("InnerString " + InnerRenderedString + " and was returned for " + JSON.stringify(ObjectKeys[j]))
                }
            }

            if (RenderObj["$"] != undefined) {
                //Inner tags are present
                    var ModelToRender = processInnerTags(RenderObj["$"]);
                console.log("returned Obj from the processTags " + JSON.stringify(ModelToRender))
                    if (ModelToRender.Model != undefined) {
                        renderedString += RenderElement(RenderObj["_"], ModelToRender.Model, InnerRenderedString, ModelToRender.Condition);
                    } else {
                        renderedString += RenderObj["_"];
                    }

            } else {
                renderedString+=InnerRenderedString;
            }
        }
    }
    console.log("returning " + renderedString)
    return renderedString;
}

//Prints the current line
function PrintLine(StrLine, DataModel, ChildString, Condition){
//console.log("in PrintLine with Str " + StrLine)
    if(StrLine==undefined){
        StrLine='';
    }
    if(DataModel!=undefined&&typeof(DataModel)=="object"){
        var DataModelKeys = Object.keys(DataModel);
        DataModelKeys.forEach(function(Key){
            var regCond = new RegExp('{{' + Key + '}}', 'ig');
            if(Condition!=undefined){

                if(typeof(DataModel[Key])=="string"){
                    Condition = Condition.replace(regCond, "'"+ DataModel[Key] + "'");
                }else{
                    Condition = Condition.replace(regCond, DataModel[Key]);
                }
            }

        });

        for(var i=0;i<DataModelKeys.length;i++){
            var reg = new RegExp('{{' + DataModelKeys[i] + '}}', 'ig');
            if(Condition!=undefined){
                if(passCondition(Condition)){
                    if(ChildString){
                        StrLine = StrLine.replace(reg, DataModel[DataModelKeys[i]]) + ChildString;
                    }else{
                        StrLine = StrLine.replace(reg, DataModel[DataModelKeys[i]]);
                    }

                }else{
                    StrLine='';
                }
            }else{
                if(ChildString){
                    StrLine = StrLine.replace(reg, DataModel[DataModelKeys[i]]) + ChildString;
                }else{
                    StrLine = StrLine.replace(reg, DataModel[DataModelKeys[i]]);
                }
            }
        }
    }else{
        //DataModel is not Defined
        //console.log("type of DataModel is " + typeof(DataModel) + DataModel)
    }

    return StrLine;
}

//Evaluates the condition
function passCondition(Condition){
    var ConditionResult = false;
    try{


        eval('if('+ Condition+ '){ConditionResult = true}');
    }catch(e){
        console.log("err " + e)
        console.log("Incorrect Condition " + Condition );
        //push into the warning or errors
    }
    return ConditionResult;
}

//Renders depending on the Type of DataModel --> DataModel is an Object or an array
function RenderElement(StrLine, DataModel, ChildString, Condition){
    var rStr = '';
    if (Array.isArray(DataModel)) {

        for(var i=0; i<DataModel.length; i++){
            rStr +=PrintLine(StrLine, DataModel[i], ChildString, Condition);
        }

    } else {
        rStr += PrintLine(StrLine, DataModel, ChildString, Condition);

    }
    return rStr;

}

function renderString(Str, DataModel) {
    for (tempVar in DataModel) {
        var reg = new RegExp('{{' + tempVar + '}}', 'ig');
        Str = Str.replace(reg, DataModel[tempVar]);
    }
    return Str;
}

function finalRender(Str, DataModel) {
    var rStr = '';
    if (Array.isArray(DataModel)) {
        for (arrayElement in DataModel) {
            rStr += renderString(Str, DataModel[arrayElement]);
        }
    } else {
        rStr += renderString(Str, DataModel);
    }

    return rStr;
}

/*Thinking behind inner Tags function is that, in total this function would return the data
 Model for the rendering after processing different tags on it
 */
function processInnerTags(RenderObject) {

    var definedActionTags = define.definedActionTags;
    var PrInTagRes ={};
    if(RenderObject.Condition!=undefined){
        PrInTagRes.Condition = RenderObject.Condition;
        delete RenderObject.Condition;
    }
    if(RenderObject.Model!=undefined){
        //Model is defined
        PrInTagRes.Model=eval("DataModel.MetaJSON." + RenderObject.Model);
        delete RenderObject.Model;

        var Keys = Object.keys(RenderObject);

        for(var i=0;i<Keys.length;i++){
            if(definedActionTags.match(Keys[i] +"#")!=-1){
                //Tag is available
                PrInTagRes.Model = new InnerTagFunctions()[Keys[i]](PrInTagRes.Model);
            }else{
                console.log("Tag " + Keys[i] + " is not available");
                Warnings.push("Tag " + Keys[i] + " is not available");
            }
        }
    }
    //check if the tag is available

    return PrInTagRes;
}

module.exports = StringRenderer;

