var myArr = []; //Needs to be global for compareArray function

function createInputArray(InputText){ 
var replaced = InputText.replace(/\n/g, '&nbsp;');
var split = replaced.split("&nbsp;");
myArr.push(split)
return myArr;


}


