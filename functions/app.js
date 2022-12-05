class App
{
    runApplication()
    {
        this.mario();
        console.log(this.bhahaha());
        console.log(this.rekenen())
    }

    mario()
    {
        let mario = "MARIO!!";
        console.log(mario);
    }
    
    bhahaha()
    {
        let lachen = "hahaha";
        return lachen;
    }
    rekenen()
    {
      let plus = (5 + 5);
      return plus;  
    }
}

let app = new App();
app.runApplication();