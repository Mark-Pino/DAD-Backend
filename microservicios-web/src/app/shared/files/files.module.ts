import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PdfService} from './pdf.service';
import {ExcelService} from "./excel-service";

const FILES_SERVICES: any = [
  ExcelService,
  PdfService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [],
  providers: [...FILES_SERVICES],
})
export class FilesModule {
}
