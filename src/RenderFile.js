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
        console.log("result " + JSON.stringify(result));
        var RenderedStringAnswer = renderObject(result);
        fs.writeFile("AppInstanceTesting.m", RenderedStringAnswer, function(err){
            if(err){
                console.log("err while  writing file")
            }else{
                console.log("file has been written")
            }
        })

        res.send(RenderedStringAnswer)
    })
};

var TheObject = {"renderFile":{"div":["\n//ApInstance","\n//AppInstance.m","\n#import \"AppInstance.h\"",{"_":"\n#import \"{{ORCHESTRATION_NAME}}.h\"","$":{"Model":"META_TABLE"}},"\n@interface AppInstance ()\n{\nNSDictionary *opDictionary;\n}\n-(void)getInstance;\n\n@end\n\n@implementation AppInstance\n\n- (id)init\n{\nself = [super init];\nif (self) {\n[self getInstance];\n}\nreturn self;\n}\n\n+(id)sharedInstance\n{\nstatic AppInstance *staticInstance;\nstatic dispatch_once_t onceToken;\ndispatch_once(&onceToken, ^{\nstaticInstance = [[AppInstance alloc] init];\n});\nreturn staticInstance;\n}\n\n-(void)getInstance\n{\nopDictionary = @{\n    ",{"_":"@\"{{ORCHESTRATION_NAME}}\":[[{{ORCHESTRATION_NAME}} alloc]init],\n    ","$":{"Model":"META_TABLE"}},"};\n    ","}\n    ",{"_":"\n-(id)get{{ORCHESTRATION_NAME}}Resource\n{\nreturn [opDictionary objectForKey:@\"{{ORCHESTRATION_NAME}}\"];\n}\n    ","$":{"Model":"META_TABLE"}},"\n@end\n    "]}};

function renderObject(RenderObj) {
    var renderedString = '';
    if (typeof(RenderObj) == "string") {
        renderedString += RenderObj;
    } else if (typeof(RenderObj) == "number") {
        renderedString += RenderObj.toString();
    } else if (typeof(RenderObj) == "object") {
        if (Array.isArray(RenderObj)) {
            // render Array
            RenderObj.forEach(function (RenderObjElement) {
                renderedString += renderObject(RenderObjElement);
            })
        } else {
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
            for (var j = 0; j < ObjectKeys.length; j++) {
                console.log("Object keys length " + ObjectKeys.length  + "Keys " +  JSON.stringify(ObjectKeys))
                if (ObjectKeys[j] != "_" && ObjectKeys[j] != "$") {
                    console.log("Different from Action and String " + JSON.stringify(RenderObj[ObjectKeys[j]]))
                    renderedString += renderObject(RenderObj[ObjectKeys[j]]);
                } else {
                    if (RenderObj["$"] != undefined) {
                        //Inner tags are present
                        if(ObjectKeys[j]=="_"){
                            console.log("Inner Tags detected");
                            var ModelToRender = processInnerTags(RenderObj["$"]);
                            if (ModelToRender != undefined) {
                                console.log("Model ");
                                renderedString += finalRender(RenderObj["_"], ModelToRender);
                            } else {
                                console.log("Model Address is not Correct");
                                renderedString += RenderObj["_"];
                            }
                        }
                    } else {
                        console.log("$ is not defined means no action tags")
                    }
                }
            }
        }
    }
    return renderedString;
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
    if(Array.isArray(DataModel)){
        for (arrayElement in DataModel) {
            rStr += renderString(Str, DataModel[arrayElement]);
        }
    }else{
        rStr+=renderString(Str, DataModel);
    }

    return rStr;
}

/*Thinking behind inner Tags function is that, in total this function would return the data
Model for the rendering after processing different tags on it
 */
function processInnerTags(RenderObject) {
    var Keys = Object.keys(RenderObject);
    var definedActionTags = define.definedActionTags;
    if (RenderObject.Model != undefined) {
        console.log("Model is defined");
        //get the Model
        var givenModel = RenderObject.Model;
        var RenderModel = eval("DataModel.MetaJSON." + givenModel);
        //console.log("RenderModel " + JSON.stringify(RenderModel))
        if (RenderObject.Action != undefined) {
            //Action is given then split the Action and process the actions
            var Actions = RenderObject.Action.split(" ");
            for (var i = 0; i < Actions.length; i++) {
                if (definedActionTags.match(Actions[i] + "#") != -1) {
                    console.log("Action Tag is available ");
                    RenderModel = new InnerTagFunctions()[Actions[i]](RenderModel);
                } else {
                    console.log("Unknown Inner tag " + Actions[i]);
                    Warnings.push("Unknown Inner tag " + Actions[i]);
                }

            }
        }

    } else {
        console.log("Model is undefined");

    }
    return RenderModel;
}

module.exports = StringRenderer;

