import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTableModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTableModule
    ]
})

export class MaterialModule{}