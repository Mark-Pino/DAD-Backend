import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttendanceComponent} from './attendance.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: 'attendance',
        loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {
}

