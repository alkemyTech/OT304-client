/*Aqui se cream todas las interfaces que tengan que ver con objetos que se puedan convertir
a JSON y asi manejarse*/

import { FormControl } from "@angular/forms";

//interfaz Padre
interface Model{
    id:number|null,
    deleted_at: Date|null,
    created_at: Date|null,
    updated_at: Date|null
}

export interface Contact extends Model{
    name:string,
    email:string,
    phone:string,
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

//INTERFACE PARA EL USUARIO
export interface User{
    id:number;
    name:string;
    email:string,
    email_verified_at:string,
    password:string,
    role_id:number,
    remember_token:string,
    created_at:string,
    update_at:string,
    delete_at:string,
    group_id:number,
    latitude:number,
    longitude:number,
    address:string,
    profile_image:string
}

export interface Category extends Model{
    name:string;
    description:string;
    image:string;
    parent_category_id:number
}

export interface searchItem{
    query:FormControl<string|null>
}