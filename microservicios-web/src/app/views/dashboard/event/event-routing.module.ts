import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.EventModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {
}

