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
        MatTableModule
    ],
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule
    ]
})

export class MaterialModule{}