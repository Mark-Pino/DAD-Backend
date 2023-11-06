import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'setup', loadChildren: () => import('./Setup/setup.module').then(m => m.SetupModule)},
      {path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule)},
      {path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule)},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
