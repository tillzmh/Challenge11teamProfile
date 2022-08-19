module.exports = function (team){
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <title>TeamCity</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <style>

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
    width: 25%;
}

</style>

        <div class = "intern">
        <h3>Inter</h3>
        <h2>Lamar Jackson</h2>
        <p>ID:34166</p>
        <p>email: LJackson@lamar.com</p>
        <p>School: Louisville</p>
        </div>

        <div class = "manager">
        <h3>Manager</h3>
        <h2>Lawrence Taylor</h2>
        <p>ID:5656</p>
        <p>email:LTaylor@lawrence.com</p>
        <p>office number: 123-456-7890</p>
        </div>

        <div class = "engineer">
        <h3>Engineer</h3>
        <h2> Ermias Joesph </h2>
        <p>email:joesph@gmail.com</p>
        <p>ID:0815</p>
        <p>github: Hussle</p>




    </head>
    <body>
        
    </body>
    </html>
    `
}