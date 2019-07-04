function createIntialObject(array1){
    return {
        Title: array1[0][0],
        Q1: array1[0][1],
        Q2: array1[0][2],
        Q3: array1[0][3],
        
        displayoff(){
        document.getElementById('nem').style.display = 'none';
        document.getElementById('em').style.display = 'flex'; 
        document.getElementById('progress-bar').style.width = '0%';
        } 
    }
    }
    