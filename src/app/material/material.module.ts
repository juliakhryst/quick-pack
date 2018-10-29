import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule
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
