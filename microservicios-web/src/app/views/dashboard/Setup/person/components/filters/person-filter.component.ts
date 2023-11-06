import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// @ts-ignore
import {abcForms} from 'src/environments/generals';

@Component({
  selector: 'app-person-filter',
  template: `
    <div class="row">
      <div class="col-md-7">
        <form class="input-group mb-3 input-gm-search" [formGroup]="filterForm">
          <input type="search" class="form-control" formControlName="nombre"
                 id="nombre"
                 placeholder="🔍 Ingresa el nombre para Buscar">
          <button type="button" class="btn btn-primary btn-gm-search text-white" (click)="goFilter()">
            <span class="{{ abcForms.btnSearch.icon }}"></span> {{ abcForms.btnSearch.label }}
          </button>
        </form>
        <div class="mb-2">
          <button type="button" (click)="goPDF()" class="btn btn-danger btn-gm-sm text-white">
            <span class="{{ abcForms.btnPrint.icon }} lamb-icon"></span>
            PDF
          </button>
          <button type="button" (click)="goEXPORT()" class="btn btn-success btn-gm-sm text-white">
            <span class="{{ abcForms.btnExport.icon }} lamb-icon"></span>
            Excel
          </button>
        </div>
      </div>
      <div class="col-md-5 d-flex justify-content-end align-items-end mb-3">
        <button type="button" (click)="goNew()" class="btn-gm-danger">
          <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Vehículo
        </button>
      </div>
    </div>
  `
})
export class PersonFilterComponent implements OnInit {
  @Input() title: string = '';
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventFilter = new EventEmitter<object>();
  @Output() eventPDF = new EventEmitter<object>();
  @Output() eventEXPORT = new EventEmitter<object>();
  abcForms: any;
  filterForm = new FormGroup({
    nombre: new FormControl(''),
    reporte: new FormControl(false),
  });

  constructor() {
  }

  ngOnInit() {
    this.abcForms = abcForms;

  }

  public goFilter(): void {
    this.filterForm.value.reporte =  false;
    this.eventFilter.emit(this.filterForm.value);
  }

  public goNew(): void {
    this.eventNew.emit(true);
  }
  public goPDF(): void {
    this.filterForm.value.reporte =  true;
    this.eventPDF.emit(this.filterForm.value);
  }
  public goEXPORT(): void {
    this.filterForm.value.reporte =  true;
    this.eventEXPORT.emit(this.filterForm.value);
  }
}
