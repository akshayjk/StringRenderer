/**
 * Created by Akshay on 28-01-2015.
 */
function processInnerTags(RenderObject) {
    var Keys = Object.keys(RenderObject);
    var definedActionTags = define.definedActionTags;
    if (RenderObject.Model != undefined) {
        //get the Model
        var givenModel = RenderObject.Model;
        var RenderModel = eval("DataModel.MetaJSON." + givenModel);
        if (RenderObject.Action != undefined) {
            //Action is given then split the Action and process the actions
            var Actions = RenderObject.Action.split(" ");
            for (var i = 0; i < Actions.length; i++) {
                if (definedActionTags.match(Actions[i] + "#") != -1) {
                    //console.log("Action Tag is available ");
                    RenderModel = new InnerTagFunctions()[Actions[i]](RenderModel);
                } else {
                    //console.log("Unknown Inner tag " + Actions[i]);
                    Warnings.push("Unknown Inner tag " + Actions[i]);
                }

            }
        }

    } else {
        //console.log("Model is undefined");

    }
    return RenderModel;
}