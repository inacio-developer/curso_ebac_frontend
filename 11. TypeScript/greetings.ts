interface greetings {
    name:string;
    greet():string;
}

class Greetigs implements greetings {
    name:string
    
    constructor(name:string){
        this.name = name;
    }

    greet(){
        return `Hello, ${this.name}`
    }
}

export {Greetigs};