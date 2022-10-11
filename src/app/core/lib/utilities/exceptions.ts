/*En este documento se crean todos los posibles errores del cliente, desde errores al 
insertar datos, como respuestas http fallidas por cualquier circunstancia*/

class Exception{
    public name:string;
    public message:string;
    constructor(name:string = "", message:string = ""){
        this.name = name;
        this.message = message;
    }
}

export class UrlException extends Exception{
    constructor(){
        super("UrlException","Invalid or empty url requested");
        super.name;
        super.message;
    }
}

export class WrongDataException extends Exception{
    constructor(message:string){
        super("WrongDataException");
        super.name;
        super.message=message;
    }
}