import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatTableModule} from '@angular/material/table';



@NgModule({
    imports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
<<<<<<< HEAD
        MatFormFieldModule
=======
        MatTableModule
>>>>>>> 0e59127a8cd656fc37a4501632ec81e9ffc4a7c5
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
<<<<<<< HEAD
        MatFormFieldModule
=======
        MatDialogModule,
        MatTableModule
>>>>>>> 0e59127a8cd656fc37a4501632ec81e9ffc4a7c5
    ]
})

export class MaterialModule{}