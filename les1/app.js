class App
{
        runApplication()
        {
            console.log("Hello World");
            let appNaam = "site";
            let versienummer = 0.9;
            let datum = new Date();
            let autheur = "Aram";
            let copyright = "geen coppyright";
            let distributeur ="Aram";
            let darkmode = true;
            //codes gaan altijd hier

            console.log(appNaam);
            console.log(versienummer);
            console.log(autheur);
            console.log(copyright);
            console.log(distributeur);
            console.log(darkmode);
            console.log(datum);
        }
}

let app = new App();
app.runApplication();