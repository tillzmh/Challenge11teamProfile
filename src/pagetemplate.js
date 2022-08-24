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
header { background-color: darkblue; 
    font-size: 12px, black}
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
console.log(html);
        for(let emp of team){
            console.log(emp);

            html +=`
            <div class="${emp.gettype()}">
            <h3>${emp.gettype()}</h3>
            <h2>${emp.getname()}</h2>
            <p>email: ${emp.getemail()}</p>
            `;
            console.log("line 44", html);
            if(emp.gettype()==="Engineer"){
            html +=`
            <p>github: ${emp.getgithub()}</p>`
            console.log("line 48", html);}

        else if(emp.gettype()==="Intern"){
            html +=`
            <p>School name: ${emp.getschool()}</p>`;
            console.log("line 53", html);}

            else if(emp.gettype()==="Manager"){
                console.log("line 56",html);
            html +=`
            <p>Office Number: ${emp.getOfficeNumber()}</p>`
            console.log("line 59", html);}
        html += `
        </div>`;
        console.log("line 62", html);
    }
        html +=`
        </body>
        </html>`;
        console.log("line 67", html);
        return html;
        
        
    }