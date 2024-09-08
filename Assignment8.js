// Find the length of string.
// code is written by sultan 

// NOTE : Create Todo list

// explane : Now we create a todo aplication simple in this application we just add task one after another . and one time we complete this Assignment we add another feature on it. like remove the task add date of the task and complete the task .
// and  your assignment is if you can you create this application complete. let start .

// first we create a file
const fs = require('fs');
const readline = require('readline');

function readme() {
    return new Promise((resolve, reject) => {
        fs.readFile("Assignment.txt", 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
//Now write the content in the existing file.
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("Assignment.txt", data, 'utf-8', (err) => {
            if (err) {
                reject("file is not working correctilly");
            } else {
                resolve("File updated successfully!");
            }
        });
    });
}

function onData(data){
    console.log("Current file content:");
    console.log(data);
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter data to append to the file: ", (userInput) => {
        const updatedData = data + "\n" + userInput;
        rl.close();

        writeToFile(updatedData)
            .then(message => console.logT(message))
            .catch(err => console.error("Error writing to file:", err));
    });
}

readme()
    .then(onData)
    .catch(err => console.error("Error reading file:", err));


    

