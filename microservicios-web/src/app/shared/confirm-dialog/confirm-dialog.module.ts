import {NgModule} from '@angular/core';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogService} from './confirm-dialog.service';

@NgModule({
  imports: [
    NgbModalModule
  ],
  declarations: [
    ConfirmDialogComponent
  ],
  providers: [
    ConfirmDialogService
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class ConfirmDialogModule {
}
