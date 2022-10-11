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
        MatFormFieldModule,
        MatTableModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
<<<<<<< HEAD
        MatFormFieldModule,
=======
        MatSnackBarModule,
>>>>>>> df86b10efdfad61d4af72b4c0839678896124285
        MatDialogModule,
        MatTableModule
    ]
})

export class MaterialModule{}