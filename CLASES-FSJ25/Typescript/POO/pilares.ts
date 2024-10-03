// 4 pilares de POO

/*
    Herencia
    Polimorfismo

    Encapsulamiento --> Limitar el acceso a algo a traves de Modificadores de acceso
    Abstraccion --> Nos da herramientas para interactuar con lo que este limitado de una clase
*/

/*
    Modificadores de acceso
    Public --> Todo el mundo puede acceder
    Private --> Solo ella misma tiene acceso
    Protected --> Va a tener acceso la misma clase y sus hijos
*/


// Para buena practica se recomiendo una clase para cada archivo

class Person {
    private name:string;
    private age:number;
    private dui:string;

    constructor (nameParam:string, ageParam:number, duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar (): void{
        console.log("aff");
    }

    //Getters  y Setters
    getName (): string {
        return this.name // se retorna para despues poder utilizarlo o manipularlo, si lo imprimiera no podria 
    }

    //El parametro ageParam no es el mismo que el del constructor
    setAge (ageParam:number){
        this.age = ageParam;
    }

    getAge (){
        return this.age;
    }

    getDui (){
        return this.dui;
    }
}

let personita = new Person ("Dimas Monge", 75, "19102-10");
//personita.name = "Hector";
console.log(personita);
console.log(personita.getName());


class Developer extends Person{
    private exp:number;
    private techSkills:string[];
    private softSkills:string[];
    private gitUser:string;
    private area:string;
    private projects:string[];

    constructor (nameParam:string, ageParam:number, duiParam:string, expParam:number, techSkillsParam:string[], softSkillsParam:string[], gitUserParam:string, areaParam:string, projectsParam:string[]){
        super(nameParam, ageParam, duiParam);
        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectsParam;
    }

    getArea(): string{
        return this.area;
    }

    respirar(): void {
        console.log("Sniff sniff");
    }
}

let developersito = new Developer("Will", 19, "12334568", 3, ["javaScript", "HTML", "CSS", "Boostrap", "Typescript"], ["Comunicación efectiva", "Proactico", "Liderazgo", "Autocritica"], "DimasMonge", "Frontend Developer", ["APIS"]);
developersito.getArea();

personita.respirar();
developersito.respirar();