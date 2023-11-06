import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from './event.component';
import {EventRoutingModule} from './event-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        EventRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [EventComponent],
})
export class EventModule {
}
