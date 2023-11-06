import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolsService } from 'src/app/providers/forms/tools.service';
import { FormValidateErrorsComponent } from './form-validate-errors/form-validate-errors.component';
import { CompareValidatorDirective } from './form-validators-password/compare-validators.directive';
import { OnlyNumberDirective } from './form-validate-only-number/form-validate-only-number.component';

const COMPONENTS: any = [
  FormValidateErrorsComponent,
  CompareValidatorDirective,
  OnlyNumberDirective
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [ToolsService],
  exports: [
    ...COMPONENTS,
  ],
})
export class FormsComponentValidModule { }
