/*Aqui se crean funciones utiles que puedan ser separadas del componente.ts para no 
saturarlo de informacion que se puede modularizar*/

import { SnackInjectData } from "..";

//Snackbar useful functions
//Funcion que sirve para cambiar snackbar de estilos
export function SnackStyleSwitcher(data: SnackInjectData): {} {
    const duration: number = 3000;
    let obj = {};
    if(data.type === "success"){
      obj = {
        duration: duration,
        panelClass: ["snack-success"],
        data: data
      };
    }else if(data.type === "error"){
      obj = {
        duration: duration,
        panelClass: ["snack-fail"],
        data: data
      };
    }else if(data.type === "info"){
      obj = {
        duration: duration,
        panelClass: ["snack-info"],
        data: data
      };
    }else{
      obj = {
        duration: duration,
        data: data
      };
    }
    
    console.log(obj)
    return obj;
  }