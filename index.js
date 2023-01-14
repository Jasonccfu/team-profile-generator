// Input packages
const fs = require("fs");
const inquirer = require('inquirer');

// Set for generaters
const generateHtml = require("./src/generateHtmlPage");

// Team members profiles
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

// Team array
// (Array to push the prompts results)
const teamArray = [];

// Start manager prompts first 
// (Must have one manager in the team)
const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message:"Please enter manager's name ",
            validate: nameInput => {
                if (nameInput){
                    return true
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message:'Please enter ID number ',
            validate: idInput => {
                if (idInput){
                    return true
                } else {
                    console.log("Please enter the manager's id.");
                    return false;
                }
            }
        },{
            type:'input',
            name:'email',
            message:"Please enter the manager's email address",
            validate: emailInput => {
                if(emailInput){
                    return true
                } else {
                    console.log("Please enter the manager's email address")
                    return false;
                }

            }
        },
        {
            type: 'input',
            name:'officeNumber',
            message:'Please enter office number',
            validate: officeNumberInput => {
                if (officeNumberInput){
                    return true
                } else {
                    console.log("Please enter the office number.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);

    })
}; //end addManager

addManager();


