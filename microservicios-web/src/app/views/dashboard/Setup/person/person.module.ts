import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonRoutingModule, rutedComponents} from './person-routing.module';
import {PersonListComponent} from './components/list/person-list.component';
import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {PersonNewComponent} from "./components/form/person-new.component";
import {PersonEditComponent} from "./components/form/person-edit.component";
import {PersonFilterComponent} from "./components/filters/person-filter.component";
const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [
  PersonListComponent,
  PersonNewComponent,
  PersonEditComponent,
];

const SERVICES: any[] = [];

const NG_MODULES: any = [];

const NGB_MODULES: any = [
  NgbModalModule,
  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
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
    PersonFilterComponent,
  ],
  providers: [
    ...SERVICES,
  ],
  exports:[
    PersonNewComponent,
  ]
})
export class PersonModule {
}
