for (var j = 0; j < ObjectKeys.length; j++) {
    console.log("Object keys length " + ObjectKeys.length  + "Keys " +  JSON.stringify(ObjectKeys));
    if (ObjectKeys[j] != "_" && ObjectKeys[j] != "$") {
        console.log("Different from Action and String " + JSON.stringify(RenderObj[ObjectKeys[j]]));
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