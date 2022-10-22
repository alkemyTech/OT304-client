/*Aqui se crean las interfaces que tengan como resultado una respuesta exitosa de peticiones
http*/

import { Category, Contact } from "./entity.interfaces";

interface got{
  success:boolean;
  message:string;
}

export interface successContact extends got{
  data: Contact;
}

export interface successContacts extends got{
  data: Array<Contact[]>;
}

export interface successCategory extends got{
  data:Category;
}

export interface successCategories extends got{
  data:Array<Category>
}

export interface deleted extends got{
  data:string
}
