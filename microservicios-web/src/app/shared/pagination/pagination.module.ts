import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginationComponent} from './pagination.component';
import {CommonModule} from '@angular/common';

export {PaginationChangeEvent} from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule,
  ],
  exports: [
    PaginationComponent,
  ],
  declarations: [
    PaginationComponent,
  ],
  providers: [],
})
export class PaginationModule {
}
