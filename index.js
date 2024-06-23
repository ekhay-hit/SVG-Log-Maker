// file system package
const fs = require('fs');
// retuiring inquirer package
const inquirer = require('inquirer');
// requiring function from the path file
const shape = require("./lib/shape.js")


// getting iput from the user
inquirer.prompt([
    {
        type :'input',
        message: "Enter test for the log -up to three characters",
        name: 'logoName'
    },
    {
        type:"input",
        message:"Enter the text's color",
        name: 'textColor',
    },
    {
        type: 'list',
        message: "Select the logo's shape",
        name: 'shape',
        choices:['circle','square','triangle']
    },
    {
        type:"input",
        message:"Enter the shape's color",
        name: 'shapeColor',
    }


])
.then((data)=>{
    // calling the function rendershape and assinging it to a varaible
    const myShape = shape.renderShape(data);

    console.log("... generating Log.svg file");
// Writing to a file
      fs.writeFile('Logo.svg',`${myShape}\t`, (error) =>
        error ? console.log(error) : console.log('Generated logo.svg'));

});