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