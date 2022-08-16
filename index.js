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


async function addManager(){
    const res=await inquirer.prompt([...empquestions,{
        message:"office number",
        name:"officenumber",
    }]);
    const emp=new Manager(res.id, res.name, res.email, res.officenumber);

    team.push(emp);
}

function finish (fileName, data) {
    const filepath =".dist/team.html";
    fs.writeFileSync(filepath, data);
    }
