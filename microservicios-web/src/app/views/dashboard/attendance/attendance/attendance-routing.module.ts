import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttendanceComponent} from './attendance.component';
import {AttendanceContainersComponent} from "./containers/attendance-containers.component";


const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      {
        path: '',
        component: AttendanceContainersComponent,
        data: {
          title: 'Asistencia'
        }
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

export const rutedComponents = [
  AttendanceContainersComponent,
  AttendanceComponent,
];
