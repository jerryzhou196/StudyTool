function Check() {
    var pb = document.getElementById("progress-bar")
    
    if (correct == 9) {
    document.getElementById("study-1").value = "";
    document.getElementById("study-2").value = "";
    document.getElementById("study-3").value = "";
    pb.style.width = (parseInt(pb.style.width, 10) + 33.33) + '%'; 
    window.alert("finished!")
    correct = 0;
    currentIndex = 0;
    cycleterms();
    
    }
    else if (correct % 3 !== 0) { //could have reversed roles w/ correct and incorrect if changing the else if statement
    document.getElementById("study-1").value = "";
    document.getElementById("study-2").value = "";
    document.getElementById("study-3").value = "";
    window.alert("INCORRECT!")
    correct = 0;
    currentIndex = 0;
    pb.style.width = 0;
    } 
        
    else {
    pb.style.width = (parseInt(pb.style.width, 10) + 33.33) + '%';
    console.log(pb)
    console.log(document.getElementById("progress-bar").style.width)
    document.getElementById("study-1").value = "";
    document.getElementById("study-2").value = "";
    document.getElementById("study-3").value = "";
    window.alert("CORRECT!")
    currentIndex = 0;
    } 
       
}

//ISSUE: keeps on adding three to correct for some reason?


   
    
    
    
    