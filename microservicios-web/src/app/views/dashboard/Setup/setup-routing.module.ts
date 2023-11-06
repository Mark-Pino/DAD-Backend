import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetupComponent} from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'period',
        loadChildren: () => import('./period/period.module').then(m => m.PeriodModule),
      },
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {
}

