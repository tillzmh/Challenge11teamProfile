module.exports=function (team){
    var html = `
    <!DOCTYPE html>
    <html lang="en">
<html>
<head>

    <title>TeamCity</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
<style>

header { background color: darkblue; 
    font-size: 12px;
    color: black;}

body{
    background-color: antiquewhite;
        margin: 0
    }
        
div{
    display: flexbox;
    align-items: center;
    }
        
.manager, .intern, .engineer{
    background-color: gray;
    width: 25%;}
</style>
</head>

    <header>
<title>TeamCity</title>
<h1>The Team</h1>
</header>

`;

        for(let emp of team){
            html +=`
            <div class="${emp.gettype()}">
            <h3>${emp.gettype()}</h3>
            <h2>${emp.getname()}</h2>
            <p>email: ${emp.getemail()}</p>
            <p>ID: ${emp.getid()}</p>`;

            if(emp.gettype()==="Engineer"){
            html +=`
            <p>github: ${emp.getgithub}</p>`
            }

        else if(emp.gettype()==="Intern"){
            html +=`
            <p>School name: ${emp.getschool}</p>`;
            }

            else if(emp.gettype()==="Manager"){
            html +=`
            <p>office number: ${emp.getOfficeNumber}</p>`
            }
        html += `
        </div>`;
    }
        html =+`
        </body>
        </html`;
        return html;
        
    }
