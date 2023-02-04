// Input packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// Set for generaters
const generateHtml = require("./src/generateHtmlPage");

// Team members profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    .then(data => {
        const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
        teamArray.push(manager); 
        // console.log(manager); 
        // console.log(teamArray); 
        addEmployee();

    })
}; //end addManager

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name:'role',
            message:"Please select your role that you want to add to the team or end",
            choices: ['Engineer', 'Intern', 'End']
        },
        {
            type: 'input',
            name:'name',
            message:'What is the name of the employee? ',
            when: (input) => input.role !== 'End',
            validate: nameInput => {
                if (nameInput){
                    return true
                } else {
                    console.log("Please enter an employee's name");
                    return false;
                }
            }
        },{
            type:'input',
            name:'id',
            message:"Please enter the employee's ID",
            when: (input) => input.role !== 'End',
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            when: (input) => input.role !== 'End',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter correct email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school ")
                }
            }
        },
    ])
    .then(data => {
        // console.log(data)
        if (data.role ==='Engineer'){
            const engineer = new Engineer (data.name, data.id, data.email, data.github);
            teamArray.push(engineer);
            // console.log(teamArray);
            addEmployee();
        } else if (data.role === 'Intern'){
            const intern = new Intern (data.name, data.id, data.email, data.school);
            teamArray.push(intern);
            // console.log(teamArray);
            addEmployee();
        } else if (data.role ==='End') {
            const pageHtml = generateHtml(teamArray);
            // console.log(pageHtml);
            fs.writeFile('./dist/index.html', pageHtml, error => {
                //throw error
                if(error) 
                    throw new Error(err);
                console.log('Team profile has benn created successfully!');
            });

        }
       
    });
}// end addEmployee

// write file
// const writeFile = teamArray = {
    
    
//     fs.writeFile('./dist/index.html', data, error => {
//         //throw error
//         if(error) {
//             console.log(error);
//             return
//         } else {
//             console.log('Team profile has benn created successfully!')
//         }

//     })
// };

addManager();
