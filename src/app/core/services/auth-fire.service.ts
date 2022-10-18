import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData, addDoc} from '@angular/fire/firestore'
import { deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  dataId!:any;
  verifyObject:any;

  constructor(private fireStore: Firestore) { }

  saveData(user:any){
    const user_ =  collection(this.fireStore,'token_Rol');
    return addDoc(user_,user); 
  }

  verifyData(): Observable<any>{
    const reference = collection(this.fireStore,'token_Rol');
    return collectionData(reference,{idField:'id'}) as Observable<any>;
  }
  deleteData(id:any){
    const referenceDoc = doc(this.fireStore,`token_rol/${id}`);
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
}
