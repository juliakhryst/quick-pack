import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule

} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES,
  ],
  declarations: [],
  exports: [...MODULES]
})
export class MaterialModule { }
