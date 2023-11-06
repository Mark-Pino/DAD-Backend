import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importation { TranslateModule } from '@ngx-translate/core';






import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule, // TranslateModule,

  ],
  declarations: [DashboardComponent],
  providers: [

  ]
})
export class DashboardModule {
}
