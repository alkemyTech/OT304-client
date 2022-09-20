import { Contact } from "./entity.interfaces";

export interface successContact {
  success: boolean;
  data: Contact;
  message: string;
}

export interface successContacts {
  success: boolean;
  data: Contact[];
  message: string;
}

export interface deleted {
  success: boolean,
  message: string
}
