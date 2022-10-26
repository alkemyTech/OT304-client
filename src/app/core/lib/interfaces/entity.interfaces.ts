/*Aqui se cream todas las interfaces que tengan que ver con objetos que se puedan convertir
a JSON y asi manejarse*/

import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

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

@Injectable({providedIn:'root'})export class User implements Model{
    public id:number|null = 0;
    public name:string = "";
    public email:string = "";
    public email_verified_at:string|null = null;
    public password:string="";
    public role_id:number|null = null;
    public remember_token:string|null = null;
    public created_at:Date|null = null;
    public updated_at:Date|null = null;
    public deleted_at: Date | null = null;
    public group_id:number|null = null;
    public latitude:number|null = null;
    public longitude:number|null = null;
    public address:string="";
    public  profile_image:string="";

    constructor(){
    }

    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }
    get getEmail(){
        return this.email;
    }
    get getEmailVerified(){
        return this.email_verified_at
    }
    get getPassword(){
        return this.password;
    }
    get getProfileImage(){
        return this.profile_image;
    }
    get getAddress(){
        return this.address
    }
    get getRoleId(){
        return this.role_id
    }
    get getRemenberToken(){
        return this.remember_token;
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
     get getGroupId(){
        return this.group_id
     }
    get getLatitud(){
        return this.latitude
    }

    get getLongitud(){
        return this.longitude
    }

//**set */
    set setIdUser(id:number|null){
        this.id = id;
    }
    set setName(name:string){
        this.name = name;
    }
    set setEmail(email:string){
        this.email = email;
    }
    set setEmailVerified(email_verified_at:string){
        this.email_verified_at = email_verified_at;
    }
    set setPassword(password:string){
        this.password = password;
    }
    set setAddress(address:string){
        this.address = address;
    }
    set setProfileImage(profile_image:string){
        this.profile_image=profile_image;
    }
    set setRoleId(role_id:number){
        this.role_id=role_id;
    }
    set setRememberToken(remember_token:string){
        this.remember_token=remember_token;
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

    set setGroupId(group_id:number){
        this.group_id=group_id
    }
    set setLatitud(latitude:number){
        this.latitude=latitude
    }
    set setLongitud(longitude:number){
        this.longitude=longitude
    }
    

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

// export interface Category extends Model{
//     name:string;
//     description:string;
//     image:string;
//     parent_category_id:number
// }

export interface searchItem{
    query:FormControl<string|null>
}

export interface Testimonial extends Model{
    id: number,
    name: string,
    image: string,
    description: string
}