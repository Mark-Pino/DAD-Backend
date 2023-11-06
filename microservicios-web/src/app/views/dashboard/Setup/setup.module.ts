import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetupComponent} from './setup.component';
import {SetupRoutingModule} from './setup-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        SetupRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [SetupComponent],
})
export class SetupModule {
}
