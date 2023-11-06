import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AttendanceRoutingModule, rutedComponents} from './attendance-routing.module';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {FormsComponentValidModule} from "../../../../shared";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";


const SHARED_MODULES: any[] = [];

const COMPONENTS: any[] = [];

const SERVICES: any[] = [];

const NG_MODULES: any = [];

const NGB_MODULES: any = [

  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AttendanceRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    ...SHARED_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
    FormsComponentValidModule,
    NgbInputDatepicker,
  ],
  declarations: [
    ...COMPONENTS,
    ...rutedComponents,
    ...PIPES,
  ],
  providers: [
    ...SERVICES,
  ],
  exports: []
})
export class AttendanceModule {
}
