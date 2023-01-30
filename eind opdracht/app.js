class App {
    runApplication() {
        console.log("Hello World!");
        //code gaat hier onder!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        //huis1
        this.huis1(g, 30, 0)
        this.huis1(g, 95, 0)
        this.huis1(g, 160, 0)
        this.huis1(g, 225, 0)
        this.huis1(g, 290, 0)

        this.huis1(g, 30, 120)
        this.huis1(g, 95, 120)
        this.huis1(g, 160, 120)
        this.huis1(g, 225, 120)
        this.huis1(g, 290, 120)
        this.weg(g, 0, 0)

        this.boom(g, 0 ,0);

        


    }
    weg(g, x, y) 
    {
        g.beginPath()
        g.fillStyle = "#58504F"
        g.moveTo(50, 80);
        g.lineTo(500,80);
        g.lineTo(500,120);
        g.lineTo(50,120);

        g.closePath();
        g.stroke();
        g.fill(); 

    }

    boom(g, x ,y)
    {
        g.beginPath();
        g.fillStyle ="green";
        g.moveTo(550,0);
        g.lineTo(525,0);
        g.lineTo(525,20);
        g.lineTo(550,20)
        
        g.closePath();
        g.stroke();
        g.fill(); 

        g.beginPath();
        g.fillStyle ="brown";
        g.moveTo(545,20)
        g.lineTo(530,20)
        g.lineTo(530,70)
        g.lineTo(545,70)



        g.closePath();
        g.stroke();
        g.fill(); 


        

    

    }

    huis1(g, x, y) {
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x + 30, y + 10);
        g.lineTo(x + 70, y + 20);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 20, y + 30);
        g.lineTo(x + 30, y + 10);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x + 70, y + 20);
        g.lineTo(x + 85, y + 30);
        g.lineTo(x + 60, y + 40);
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x + 20, y + 30);
        g.lineTo(x + 20, y + 60);
        g.lineTo(x + 60, y + 70);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 20, y + 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x + 60, y + 40);
        g.lineTo(x + 60, y + 70);
        g.lineTo(x + 85, y + 60);
        g.lineTo(x + 85, y + 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x + 65, y + 55);
        g.lineTo(x + 65, y + 68);
        g.lineTo(x + 70, y + 66);
        g.lineTo(x + 70, y + 53);
        g.lineTo(x + 65, y + 55);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(x + 25, y + 45);
        g.lineTo(x + 40, y + 48);
        g.lineTo(x + 40, y + 55);
        g.lineTo(x + 25, y + 52)
        g.closePath();
        g.stroke();
        g.fill();
        


    }
}     
        
let app = new App();
app.runApplication();
