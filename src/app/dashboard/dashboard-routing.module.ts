import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';
import { FilterGenderComponent } from './filters/filter-gender/filter-gender.component';

const routes: Routes = [
    { path: '',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }