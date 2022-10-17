import { Component, OnInit,Inject } from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message: string;
      title: string;
      confirmText: string;
      cancelText: string;
    }
  ) {}

  closeDialog(): void {
    this.dialog.close(false);
  }
  confirm(): void {
    this.dialog.close(true);
  }
  ngOnInit(): void { }

}
