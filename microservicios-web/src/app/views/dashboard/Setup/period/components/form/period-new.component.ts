import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {abcForms, typesReceta} from 'src/environments/generals';
import {PeriodService} from "../../../../../../providers/services";
import {ConfirmDialogService} from "../../../../../../shared";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-period-new',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Periodo</a>
        </li>
      </ul>
      <form [formGroup]="periodForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Descripción. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripcion"
                   id="descripcion"
                   placeholder="2023">
          </div>
          <app-form-validate-errors [group]="periodForm"
                                    [controlName]="'descripcion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2">
          <div class="input-group input-group-sm input-group-rounded">
            <div class="input-group input-group-sm">
              <label class="col-form-label"><b>Estado.</b></label>
            </div>
            <div class="custom-control custom-checkbox d-flex align-items-center">
              <input type="checkbox" class="custom-control-input" id="estado"
                     formControlName="estado">
              <label class="custom-control-label todo-label badge-gm" for="estado">
                            <span
                              class="badge text-bg-{{periodForm.value.estado ?'success': 'danger'}} text-white">
                            {{periodForm.value.estado ? 'ACTIVO' : 'INACTIVO'}}</span>
              </label>
            </div>
          </div>
        </div>

      </form>
      <hr>
    </div>
    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()"
                [disabled]="periodForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class PeriodNewComponent implements OnInit {
  //@Input() title: string = '';
  abcForms: any;
  public error: string = '';

  periodForm = new FormGroup({
    descripcion: new FormControl('', [Validators.required]),
    estado: new FormControl(true, [Validators.required]),

  });


  constructor(private periodService: PeriodService,
              private confirmDialogService: ConfirmDialogService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.abcForms = abcForms;

  }

  public saveForm(): void {
    if (this.periodForm.valid) {
      // @ts-ignore
      this.confirmDialogService.confirmSave().then(() => {
        this.periodService.add$(this.periodForm.value).subscribe(response => {
          this.router.navigate(['../'], {relativeTo: this.route});
        }, error => {
          this.error = error;
        });
      }).catch(() => {
      });
    }
  }

  public cancelForm(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
