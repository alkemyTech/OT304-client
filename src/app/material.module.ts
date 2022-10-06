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
        MatFormFieldModule,
        MatTableModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTableModule
    ]
})

export class MaterialModule{}