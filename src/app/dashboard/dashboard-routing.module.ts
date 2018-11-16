import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { FilterDurationComponent } from './filters/filter-duration/filter-duration.component';
import { FilterGenderComponent } from './filters/filter-gender/filter-gender.component';

const routes: Routes = [
    { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
        // { path: '', redirectTo: 'login' },
        {
          path: 'trip-duration',
          component: FilterDurationComponent
        },
        {
          path: 'trip-type',
          component: FilterGenderComponent
        },
        {
          path: 'gender',
          component: FilterGenderComponent
        }
        // {
        //   path: 'activities',
        //   component: ActivitiesFilterComponent
        // }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
