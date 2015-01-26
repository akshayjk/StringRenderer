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

/*
<!--<div class="row marketing">
    <h4>Demo</h4>
    <div class="tests">
        <div class="result">
            <json-formatter json="complex" open="1" class="json-formatter"></json-formatter>
        </div>
    </div>

</div>-->
<!-- <div>
     <textarea id="editor" ng-model="textData"></textarea>
 </div>
 <div><p ng-model="textData"></p></div>
 <div ui-ace="{ mode: 'xml', theme: 'clouds' }" ng-model="textData">
 </div>
 <div><button ng-click="sendCode()">ClickMe</button></div>
 <div>Another CodeEditor
 <div ui-ace="{mode: 'csharp', theme: 'clouds'}" ng-model="renderedCode"></div>
 </div>-->*/
