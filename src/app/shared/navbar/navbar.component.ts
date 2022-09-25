import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute:string;
  rootUrl:string;
  constructor(private router:Router) {
    this.currentRoute= '';
    this.rootUrl="http://127.0.0.1:4200";
    
    this.router.events.subscribe((event)=>{
      const links=document.getElementsByClassName('link');
      if(event instanceof NavigationEnd){
        this.currentRoute=event.url;
        this.currentToggle(links);
      }
    })
  }

  ngOnInit(): void {
    
  }

  currentToggle(links:HTMLCollectionOf<Element>):void{
    for(let i = 0; i<links.length; i++){
      let link = links[i];
      if(link instanceof HTMLAnchorElement){
        if(!(link.href === this.rootUrl+this.currentRoute)){
          link.classList.remove('current');
        }else{
          link.classList.toggle('current')
          break;
        }
      }
    }
  }

}
