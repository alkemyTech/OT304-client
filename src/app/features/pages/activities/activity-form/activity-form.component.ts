import { Component, OnInit } from '@angular/core';
import { NewsContactsService } from 'src/app/core/services/news-contacts.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';

  constructor(private contactService:NewsContactsService) { 
    // this.contactService.getContacts(true).subscribe((response)=>{
    //   console.log(response.data);
    // },(error)=>{
    //   console.log(error)
    // })
  }

  ngOnInit(): void {
  }

}
