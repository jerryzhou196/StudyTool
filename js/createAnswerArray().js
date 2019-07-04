var answerArr = [];

function createAnswerArray(){
for (I = 1; I < 4; I++ ){
answerArr.push((document.getElementById("study-"+I).value))
}
return answerArr;
}

