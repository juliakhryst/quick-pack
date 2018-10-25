import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCheckboxModule,
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
