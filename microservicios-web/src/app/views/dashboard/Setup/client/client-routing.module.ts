import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ClientComponent} from './client.component';
import {ClientContainersComponent} from "./container/client-containers.component";


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientContainersComponent,
        data:{
          title:'Periodo'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}

export const rutedComponents = [
  ClientContainersComponent,
  ClientComponent,
];
