import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData, addDoc} from '@angular/fire/firestore'
import { deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  
  dataId!:any;
  

  constructor(private fireStore: Firestore,private db:AngularFirestore,private router:Router) { }

  saveData(user:any){
    const user_ =  collection(this.fireStore,'token_Rol');
    return addDoc(user_,user); 
  }

  verifyData(): Observable<any>{
    const reference = collection(this.fireStore,'token_Rol');
    return collectionData(reference,{idField:'id'}) as Observable<any>;
  }
  deleteData(id:any){
    const referenceDoc = doc(this.fireStore,`token_Rol/${id}`);
    return deleteDoc(referenceDoc);
  }


  isAuth():boolean{
    const token = localStorage.getItem('Token');
    if(token===null){
      console.log('Token no existe')
      return false;
    }
    return true;
  }

  deleteToken(){
    this.verifyData().subscribe((res=>{
      this.dataId=res;
      const token = localStorage.getItem('Token');
      if(this.dataId==undefined){
        return {message:"no data"};
      }
      const verifyToken = this.dataId.find((data:any)=> data.token==token);
      const id_user=verifyToken.id;
      const responses=this.deleteData(id_user);
      localStorage.removeItem('Token');
      this.router.navigate(['login']);
      return;
      }
    ))
    
  }
}
