/**
 * Created by 385382 on 1/28/2015.
 */





var dataModel =[{
    "name":"akshay",
    "age":23,
    "Eligible":true
},
    {
        "name":"akshay2",
        "age":25,
        "Eligible":false
    }];

var Condition = "{{name}}=='akshay'&&{{age}}>20";

var StrToRender = "My name is {{name}}\n";
var Child;

var output = RenderElement(StrToRender, dataModel, Child, Condition);
console.log("answer : " + output)


function renderObject(){

}


//Prints the current line
function PrintLine(StrLine, DataModel, ChildString, Condition){

    if(StrLine==undefined){
        StrLine='';
    }
    var DataModelKeys = Object.keys(DataModel);
    DataModelKeys.forEach(function(Key){
        var regCond = new RegExp('{{' + Key + '}}', 'ig');
        if(typeof(DataModel[Key])=="string"){
            Condition = Condition.replace(regCond, "'"+ DataModel[Key] + "'");
        }else{
            Condition = Condition.replace(regCond, DataModel[Key]);
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

