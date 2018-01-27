import { NgModule } from "@angular/core";
import {
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
} from "@angular/material";

@NgModule({
    exports: [
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
    ],
})
export class MaterialModule {}