class App
{
        runApplication()
        {
            let title = document.getElementById("newstitle")
            let randomgetal = Math.random();
            console.log(randomgetal);

            if (randomgetal == 0)
            {
                title.style.backgroundColor ="#00FF00";
            }
            else if (randomgetal < 0.2)
            {
                title.style.backgroundColor ="#FF0000";
            }
            else if (randomgetal >= 0.2 && randomgetal< 0.6)
            {
                title.style.backgroundColor ="#FFFF00";
            }
            else if (randomgetal > 0.6)
            {
                title.style.backgroundColor ="#0000FF";
            }
        }
}

let app = new App();
app.runApplication();