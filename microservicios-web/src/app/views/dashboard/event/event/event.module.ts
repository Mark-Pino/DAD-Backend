import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbDatepickerModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {EventRoutingModule, rutedComponents} from './event-routing.module';
import {EventListComponent} from './components/list/event-list.component';
import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {EventNewComponent} from "./components/form/event-new.component";
import {EventEditComponent} from "./components/form/event-edit.component";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [
  EventListComponent,
  EventNewComponent,
  EventEditComponent,
];

const SERVICES: any[] = [];

const NG_MODULES: any = [];

const NGB_MODULES: any = [
  NgbModalModule,
  NgbDatepickerModule
  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    ...SHARED_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ...rutedComponents,
    ...PIPES,
  ],
  providers: [
    ...SERVICES,
  ],
  exports: [
    EventNewComponent,
  ]
})
export class EventModule {
}
