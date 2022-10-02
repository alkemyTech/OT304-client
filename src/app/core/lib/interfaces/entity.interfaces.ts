/*Aqui se cream todas las interfaces que tengan que ver con objetos que se puedan convertir
a JSON y asi manejarse*/

export interface Contact{
    id:number|null,
    name:string,
    email:string,
    phone:string,
    message:string,
    deleted_at: Date|null,
    created_at: Date|null,
    updated_at: Date|null
}

export interface SnackInjectData{
    content:string,
    type:string
}