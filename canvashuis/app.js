class App
{
    runApplication()
    {
        class App
        {
            runApplication()
            {
                console.log("Hello World!");
                //code gaat hier onder!
                let canvas = document.getElementById("canvasId");
                let g = canvas.getContext("2d");
                g.beginPath()
                g.fillStyle = "red";
                g.moveTo(300,100); 
                g.lineTo(700,200); 
                g.lineTo(600,400); 
                g.lineTo(200,300); 
                g.lineTo(300,100); 
                g.closePath();
                g.stroke();
                g.fill();
                g.beginPath()
                g.fillStyle = "yellow";
                g.moveTo(700,200); 
                g.lineTo(850,300);
                g.lineTo(600,400); 
                g.closePath();
                g.stroke();
                g.fill();
        
        
                g.beginPath()
                g.fillStyle = "brown";
                g.moveTo(200,300);
                g.lineTo(200,600);
                g.lineTo(600,700);
                g.lineTo(600,400);
                g.lineTo(200,300);
                g.closePath();
                g.stroke();
                g.fill();
        
                g.beginPath()
                g.fillStyle = "blue";
                g.moveTo(600,400);
                g.lineTo(600,700);
                g.lineTo(850,600);
                g.lineTo(850,300);
                g.closePath();
                g.stroke();
                g.fill();
        
                g.beginPath()
                g.fillStyle = "red";
                g.moveTo(650,550);
                g.lineTo(650,680);
                g.lineTo(700,660);
                g.lineTo(700,530);
                g.lineTo(650,550);
                g.closePath();
                g.stroke();
                g.fill();
        
        
        
                console.log(canvas)
            }
        }
        
        let app = new App();
        app.runApplication();
        

    }





}

let app = new App();
app.runApplication();