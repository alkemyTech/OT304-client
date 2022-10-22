/*Aqui se cream todas las interfaces que tengan que ver con objetos que se puedan convertir
a JSON y asi manejarse*/

import{Injectable}from'@angular/core'

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


@Injectable({providedIn:'root'})export class Category implements Model{
    public id:number|null = 0;
    public name:string = "";
    public description:string = "";
    public image:string = "";
    public parent_category_id:number = 0;
    public created_at:Date|null = null;
    public updated_at:Date|null = null;
    public deleted_at: Date | null = null;

    constructor(){
    }

    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }
    get getDescription(){
        return this.description;
    }
    get getImage(){
        return this.image;
    }
    get getPCID(){
        return this.parent_category_id;
    }
    get getCAt(){
        return this.created_at;
    }
    get getUAt(){
        return this.updated_at;
    }
    get getDAt(){
        return this.deleted_at;
    }

    set setId(id:number|null){
        this.id = id;
    }
    set setName(name:string){
        this.name = name;
    }
    set setDescription(description:string){
        this.description = description;
    }
    set setImage(image:string){
        this.image = image;
    }
    set setPCID(pcId:number){
        this.parent_category_id = pcId;
    }
    set setCAt(CAt:Date){
        this.created_at = CAt;
    }
    set setUAt(UAt:Date){
        this.updated_at = UAt;
    }
    set setDAt(DAt:Date){
        this.deleted_at = DAt;
    }
}

// @Injectable({providedIn:'root'})export interface Category extends Model{
//     id:number|null,
//     name:string,
//     description:string,
//     image:string,
//     parent_category_id:number,
//     created_at:Date|null,
//     updated_at:Date|null,
//     deleted_at: Date | null
// }