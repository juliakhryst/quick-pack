import { GeneratedListWrapperComponent } from './../generated-list-wrapper/generated-list-wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    { path: '',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },

    { path: 'list',
      component: GeneratedListWrapperComponent,
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
