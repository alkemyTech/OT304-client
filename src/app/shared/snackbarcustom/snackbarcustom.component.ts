import { Component, OnInit,Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { faInfoCircle,faCheck,IconDefinition, faTimes } from "@fortawesome/free-solid-svg-icons"
import { SnackInjectData } from 'src/app/core/lib';

@Component({
  selector: 'app-snackbarcustom',
  templateUrl: './snackbarcustom.component.html',
  styleUrls: ['./snackbarcustom.component.scss']
})
export class SnackbarcustomComponent implements OnInit {
  faInfoCircle:IconDefinition = faInfoCircle;
  faCheck:IconDefinition = faCheck;
  faTimes:IconDefinition = faTimes;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:SnackInjectData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
