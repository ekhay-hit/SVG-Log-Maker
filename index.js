const fs = require('fs');
const inquirer = require('inquirer');
const renderShape = require("./lib/shape")
// const { default: Choice } = require('inquirer/lib/objects/choice');


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

    const myShape = renderShape(data);

// Writing to a file

      fs.writeFile('Logo.svg',`${myShape}\t`, (error) =>
        error ? console.log(error) : console.log('Success'));

});