const Employee = require
const Manger = require
const Engineer = require
const Intern = require
const inquirer = require ("inquirer")
const fs = require('fs')
const { start } = require("repl")
const { templateElement } = require("@babel/types")
const generateHtml = require 
const empquestions = [
    {
        message: "ID?",
        name: "id",
    },
    {
        message: "Name?",
        name: "name",
    },
    {
        message: "Email?",
        name: "email",
    }
    
];

start()

function start() {
    console.log(WelcomeMessage)
    mainMenu();
}

async function mainMenu() {
    const res=await inquirer.prompt({
        message: "what do you want to do?",
        type: "list",
        name: "action",
        choices: ["add engineer", "add intern", "add manager", "finsh"]
    });
    switch(res.action){
        case "add engineer": return addEngineer();
        case "add intern": return addIntern();
        case "add manager": return addManager();
            case "finsh": return finsh();
    }
}

async function addManager(){
    const res=await inquirer.prompt([...empquestions,{
        message:"office number",
        name:"officenumber",
    }]);
    const emp=new Manager(res.id, res.name, res.email, res.officenumber);

    team.push(emp);
}

async function addEngineer(){
    const res=await inquirer.prompt([...empquestions,{
        message: "github?",
        name:"github"
    }])
    const emp=new Engineer(res.id, res.name, res.email, res.github);
    team.push(emp);
}

async function addIntern(){
    const res=await inquirer.prompt([...empquestions,{
        message: "school?",
        name:"school"
    }]);
    const emp=new Intern(res.id, res.name, res.email, res.school)

team.push(emp)
}



function finish (fileName, data) {
    const filepath =".dist/team.html";
    fs.writeFileSync(filepath, data);
    }
