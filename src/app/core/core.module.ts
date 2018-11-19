import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild({})
  ],
  declarations: [
    LanguageSwitcherComponent,
    HeaderComponent
  ],
  exports: [
    LanguageSwitcherComponent,
    HeaderComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
