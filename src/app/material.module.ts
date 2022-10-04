import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
        MatDialogModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule
    ]
})

export class MaterialModule{}