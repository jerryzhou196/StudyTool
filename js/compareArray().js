var correct = 0;
var currentIndex = 0;

function compareArray(Array1, Array2) {
console.log(Array1,Array2)
 Array2.forEach(() => {
if (Array1[0][currentIndex+1] == Array2[currentIndex]) { 
correct+= 1; 
currentIndex+= 1;
}
else {
correct = -1;
}
}); 
Check() }



//ISSUE: keeps on adding three to correct for some reason?


   
    
    
    
    