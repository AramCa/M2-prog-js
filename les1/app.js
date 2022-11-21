class App
{
        runApplication()
        {
            console.log("Hello World");
            let appNaam = "site";
            let versienummer = 0.9;
            let versiedatum =  "21-11-2022";
            let autheur = "Aram";
            let copyright = "geen coppyright";
            let distributeur ="Aram";
            let darkmode = true;
            //codes gaan altijd hier

            console.log(appNaam);
            console.log(versienummer);
            console.log(versiedatum);
            console.log(autheur);
            console.log(copyright);
            console.log(distributeur);
            console.log(darkmode);
        }
}

let app = new App();
app.runApplication();