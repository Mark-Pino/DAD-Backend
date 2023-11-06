import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttendanceComponent} from './attendance.component';
import {AttendanceRoutingModule} from './attendance-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        AttendanceRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [AttendanceComponent],
})
export class AttendanceModule {
}
