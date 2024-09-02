// Find the length of string.
// code is written by sultan 

// NOTE : plz ignore spelling. and focus to learn.

// Assignment 6 : uploading file and then display file content.

    document.getElementById("fileinput").addEventListener('change',function(event){
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                document.getElementById("fileContent").textContent = e.target.result;
            };
            reader.readAsText(file);
        }
    });



    // use this code for html 
    // <input type="file" id="fileinput" name="ufile">
    // <div id="fileContent"></div>

