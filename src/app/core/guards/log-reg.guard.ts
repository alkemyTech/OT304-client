import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFireService } from '../services/auth-fire.service';

@Injectable({
  providedIn: 'root'
})
export class LogRegGuard implements CanActivate {
  
  constructor(private authSVC:AuthFireService,private router:Router){}
  canActivate():boolean{
    
    if(this.authSVC.isAuth()){
       this.router.navigate(['home']);
       return false;
    }
    return true;
  }
  
}
