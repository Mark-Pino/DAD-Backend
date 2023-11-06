import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PeriodRoutingModule, rutedComponents} from './period-routing.module';
import {PeriodListComponent} from './components/list/period-list.component';
import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {PeriodNewComponent} from "./components/form/period-new.component";
import {PeriodEditComponent} from "./components/form/period-edit.component";
import {PeriodFilterComponent} from "./components/filters/period-filter.component";
const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [
  PeriodListComponent,
  PeriodNewComponent,
  PeriodEditComponent,
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
    PeriodRoutingModule,
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
    PeriodFilterComponent,
  ],
  providers: [
    ...SERVICES,
  ],
  exports:[
    PeriodNewComponent,
  ]
})
export class PeriodModule {
}
