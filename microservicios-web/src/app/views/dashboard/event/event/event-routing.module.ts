import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event.component';
import {EventContainersComponent} from "./containers/event-containers.component";
import {EventEditComponent, EventNewComponent} from "./components";

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: '',
        component: EventContainersComponent,
        data: {
          title: 'Evento'
        }
      },
      {
        path: 'new',
        component: EventNewComponent,
        data: {
          title: 'Nuevo Evento'
        }
      },
      {
        path: 'edit',
        component: EventEditComponent,
        data: {
          title: 'Editar Evento'
        }
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

export const rutedComponents = [
  EventContainersComponent,
  EventComponent,
];
