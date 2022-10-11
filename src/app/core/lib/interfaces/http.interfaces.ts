/*Aqui se crean las interfaces que tengan como resultado una respuesta exitosa de peticiones
http*/

import { Contact } from "./entity.interfaces";

export interface successContact {
  success: boolean;
  data: Contact;
  message: string;
}

export interface successContacts {
  success: boolean;
  data: Array<Contact[]>;
  message: string;
}

export interface deleted {
  success: boolean,
  message: string
}
