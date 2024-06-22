const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');


inquirer.prompt([
    {
        type :'input',
        message: "Enter up to three characters",
        name: 'logoName'
    },
    {
        type:"input",
        message:"Enter the text's color",
        name: 'textColor',
    },
    {
        type: 'list',
        message: "Enter the logo's shape",
        name: 'shape',
        choices:['Circle','square','traingle']
    },
    {
        type:"input",
        message:"Enter the shape's color",
        name: 'shapeColor',
    }


])
.then((data)=>{

    console.log(data);

});