const inquirer = require ("inquirer");
const Employee = require ("./lib/employee.js");
const Manager = require ("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const fs = require('fs');
const generateHtml = require("./src/pagetemplate.js");
const filepath = ("./team.html");
const empquestions = [
    {   type:"input",
        message: "ID?",
        name: "id",
    },
    {   type:"input",
        message: "Name?",
        name: "name",
    },
    { type:"input",
        message: "Email?",
        name: "email",
    }
    
];

var team = [];
start();

function start() {
    mainMenu();
}

async function mainMenu() {
    const res=await inquirer.prompt({
        message: "what do you want to do?",
        type: "list",
        name: "action",
        choices: ["add engineer", "add intern", "add manager", "finish"]
    });
    switch(res.action){
        case "add engineer": return addEngineer();
        case "add intern": return addIntern();
        case "add manager": return addManager();
        case "finish": return finish();
    }
}

async function addManager(){
    const res=await inquirer.prompt([...empquestions,{
        message:"office number",
        name:"officenumber",
    }]);
    const emp=new Manager(res.id, res.name, res.email, res.officenumber);

    team.push(emp);
    console.log("manager added successfully");
    mainMenu();
}

async function addEngineer(){
    const res=await inquirer.prompt([...empquestions,{
        message: "github?",
        name:"github",
    }])
    const emp=new Engineer(res.id, res.name, res.email, res.github);
    team.push(emp);
    console.log("engineer added successfully");
    mainMenu();
}

async function addIntern(){
    const res=await inquirer.prompt([...empquestions,{
        message: "school?",
        name:"school",
    }]);
    const emp=new Intern(res.id, res.name, res.email, res.school)
    console.log(emp);
    team.push(emp);
    console.log(team);
    console.log("intern added");
    mainMenu();
}


function finish(){
    console.log(team);
    const filepath = "./dist/team.html";
    const data = generateHtml(team);
    console.log(typeof data)
fs.writeFileSync(filepath,data);
    process.exit();
    }
    
