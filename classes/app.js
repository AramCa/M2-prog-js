class App
{
    runApplication()
    {

    }
}
class Dino
{
    constructor(naam, vleeseter, age,)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.age = age;
        this.leeft = true;
        this.hunger = true;
        
    }

    eetplant(dino)
    {
        dino.hunger = false;
    }

    eetDino(dino)
    {
        dino.leeft = false;

    }
}
class plant
{
    constructor(name,)
    {
        this.name = name;

    }
}

let trex = new Dino("Trex",true,21)
console.log(trex);

let velo = new Dino("velo",true,21)
console.log(velo);

let parasaur = new Dino("parasaur",false,23)
console.log(parasaur);

console.log(`${parasaur.naam} eet de plant gras`)

parasaur.eetplant(parasaur)
console.log(parasaur)

console.log(`${trex.naam} eet dino ${parasaur.naam}`)

trex.eetDino(parasaur);
console.log(parasaur);

let app = new App();
app.runApplication();



