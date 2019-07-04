var g = 0; //Can't be intialized within the callBack in setInterval because it will keep on being reset to 0 in each interval
DataInput = []; //Array that contains all answers            
AnswerInput = []; //Array that contains the display answers

// CREATES THE INTRODUCTORY PLACEHOLDER EFFECT 
var myVar = setInterval(() => 
{var message = 'Insert your formated terms that you want to memorize. Go to the tutorial to learn how to use this!';
if (g > message.length) {
clearInterval(myVar) } 
document.querySelector('#search').placeholder += message.charAt(g++)}
,50) 

// PUSHES INTIAL DATA INTO ARRAY; CLICKED UPON SUBMITTING ENTIRE TERM LIST 
function pushData(){
DataInput = createInputArray(document.getElementById('search').value) //Creates array that has all input answers
IntialObject = createIntialObject(DataInput) //Creates an object out of this array which is used for giving values to placeholders
IntialObject.displayoff() //Switchs to epic mode
draw(); //Sets up placeholder values 
}

// SETS UP PLACEHOLDERS FOR INTIAL TYPING 
function draw(){
document.getElementById("header").innerHTML = IntialObject.Title;
document.getElementById("study-1").setAttribute('placeholder', IntialObject.Q1) 
document.getElementById("study-2").setAttribute('placeholder', IntialObject.Q2)
document.getElementById("study-3").setAttribute('placeholder', IntialObject.Q3)
}

// CREATES AN ARRAY FOR ANSWER ATTEMPT, CHECKS IF IT IS CORRECT AND CLEARS ARRAY
function checkTerms() {
AnswerInput = createAnswerArray()
compareArray(DataInput, AnswerInput)
AnswerInput.length = 0;
}

function cycleterms(){
    DataInput[0].splice(0,4)
    IntialObject = createIntialObject(DataInput)
    draw()
    document.getElementById("progress-bar").style.width = "0%";
}

// New keyword is not needed in all create methods overwrite the old DataInput as it is continuously recycled as user progresses through the question test ; 







/*
{
    var search = document.getElementById('search').value.replace(/\n/g, '&nbsp;'); // get value from the input text
    var splitter = search.split("&nbsp;") // splits input string into several different strings 
    myArr.unshift(splitter);  // append data to the array 
    displayoff();
    }

//IF TERMS ARE INCORRECt; execute this
// WORKING CODE ABOVE 
/* for (let g = 0; g < message.length; g++){
setTimeout(() =>
   (document.querySelector("#search").placeholder += message.charAt(g)), g*speed);
   console.log(g*speed);}
   
   window.onload = function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg)
        i++;
        setTimeout(typeWriter, speed);
    }
}

*/
/*
checkterms = () =>{
    // TRANSFERS INPUT INTO ARRAY //
    for (var x = 1; x < 4; x++ ){
    inputArr.push(document.getElementById("study-"+x).value)
    var g = 0;
    }
    //IF TERMS ARE CORRECT; execute this 
    inputArr.forEach(() => {
        correctInARow = 0;
        if (inputArr[g] === myArr[0][g+1]){
        correctInARow ++;
        g++;}
        else{
        document.getElementById("study-1").value = "";
        document.getElementById("study-2").value = "";
        document.getElementById("study-3").value = "";
        x = 1  
        }
        if (correctInARow = 2){
        document.getElementById('progress-bar').width = '30%';
        document.getElementById("study-1").value = "";
        document.getElementById("study-2").value = "";
        document.getElementById("study-3").value = "";
        x = 1
        }
    })}



/* const textbox = {
    pushData: () => {
    var search = document.getElementById('search').value.replace(/\n/g, '&nbsp;'); // get value from the input text //replaces special characters w/ space
    var splitter = search.split("&nbsp;") // splits input string into several different strings 
    myArr.push(splitter);  // append data to the array        
    displayoff();
    }
}

function pushData()
    {
    var search = document.getElementById('search').value; // get value from the input text
    var string = search.replace(/\n/g, '&nbsp;'); //replaces special characters w/ space
    //console.log(string);
    var splitter = string.split("&nbsp;") // splits input string into several different strings 
    myArr.push(splitter);  // append data to the array        
    displayoff();
    }









*/
// WORKING CODE BELOW 







    
   // var pval = "";
   //if (inputArr[g] == ""){
    //("Please write something in the box")
//}
                //for(i = 0; i < myArr.length; i++)
                //{
                    //pval = pval + myArr[i] + "<br/>";
                //}
           
           
        
            //}
            
//while (inputArr[g] == myArr[0][g+1]){
//g++;}
//if (g = 3){
//    = ; 
//}







    
