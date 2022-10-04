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

export interface Slides{
    id:number|null,
    name:string,
    description:string,
    image:string,
    order:number,
    user_id: number,
    created_at: Date|null,
    updated_at: Date|null,
    delete_at:  Date|null
}