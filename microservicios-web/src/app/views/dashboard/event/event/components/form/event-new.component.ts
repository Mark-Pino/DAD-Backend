import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {abcForms, typesReceta} from 'src/environments/generals';
import {ConfirmDialogService} from "../../../../../../shared";
import {ActivatedRoute, Router} from "@angular/router";
import {Institution} from "../../../../Setup/person/models/institution";
import {Subsidiary} from "../../../../Setup/person/models/subsidiary";
import {Faculty} from "../../../../Setup/person/models/faculty";
import {ProfessionalSchool} from "../../../../Setup/person/models/professionalSchool";
import {InstitutionService} from "../../../../../../providers/services/setup/institution.service";
import {SubsidiaryService} from "../../../../../../providers/services/setup/subsidiary.service";
import {FacultyService} from "../../../../../../providers/services/setup/faculty.service";
import {ProfessionalSchoolService} from "../../../../../../providers/services/setup/professional-school.service";
import {EventService} from "../../../../../../providers/services/event/event.service";
import {EventDetail} from "../../models/eventDetail";
import {PersonService} from "../../../../../../providers/services/setup/person.service";
import {CycleService, GroupService} from "../../../../../../providers/services";
import {Cycle} from "../../models/cycle";
import {Group} from "../../models/group";
import {Person} from "../../../../Setup/person/models/person";

@Component({
  selector: 'app-event-new',
  template: `
      <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
          <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
      </button>
      <div>
          <ul class="nav nav-tabs">
              <li class="nav-item">
                  <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Evento</a>
              </li>
          </ul>
          <form [formGroup]="eventForm" class="row mt-2 d-flex justify-content-start align-items-center ">
              <div class="form-group col-md-2 required">
                  <div class="input-group input-group-sm">
                      <label class="col-form-label"><b>Evento. </b></label>
                  </div>
                  <div class="input-group input-group-sm input-group-rounded">
                      <input type="text" class="form-control form-control-sm" formControlName="nombre"
                             id="nombre"
                             placeholder="Evento ...">
                  </div>
                  <app-form-validate-errors [group]="eventForm"
                                            [controlName]="'nombre'"></app-form-validate-errors>
              </div>
              <div class="form-group col-md-2 required">
                  <div class="input-group input-group-sm">
                      <label class="col-form-label"><b>Descripción. </b></label>
                  </div>
                  <div class="input-group input-group-sm input-group-rounded">
                      <input type="text" class="form-control form-control-sm" formControlName="descripcion"
                             id="descripcion"
                             placeholder="2023">
                  </div>
                  <app-form-validate-errors [group]="eventForm"
                                            [controlName]="'descripcion'"></app-form-validate-errors>
              </div>
              <div class="form-group col-md-2 required">
                  <div class="input-group input-group-sm">
                      <label class="col-form-label"><b>Tolerancia. </b></label>
                  </div>
                  <div class="input-group input-group-sm input-group-rounded">
                      <input type="text" class="form-control form-control-sm" formControlName="tolerancia"
                             id="tolerancia"
                             placeholder="10">
                  </div>
                  <app-form-validate-errors [group]="eventForm"
                                            [controlName]="'tolerancia'"></app-form-validate-errors>
              </div>
              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Institucion. </b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="institucionId"
                              id="institucionId">
                          <option value=0>Selecciona Institucion</option>
                          <option *ngFor="let l of institutions" [value]="l.id">
                              {{l.descripcion}}
                          </option>
                      </select>
                  </div>
              </div>

              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Filial. </b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="filialId"
                              id="filialId">
                          <option value=0>Selecciona Filial</option>
                          <option *ngFor="let l of subsidiarys" [value]="l.id">
                              {{l.descripcion}}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Facultad. </b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="facultadId"
                              id="facultadId">
                          <option value=0>Selecciona Facultad</option>
                          <option *ngFor="let l of facultys" [value]="l.id">
                              {{l.descripcion}}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Escuela Profesional. </b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="escuelaProfesionalId"
                              id="escuelaProfesionalId">
                          <option value=0>Seleccione Escuela Profesinal</option>
                          <option *ngFor="let l of profesionalSchools" [value]="l.id">
                              {{l.descripcion}}
                          </option>
                      </select>
                  </div>
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
                                    class="badge text-bg-{{eventForm.value.estado ?'success': 'danger'}} text-white">
                            {{eventForm.value.estado ? 'ACTIVO' : 'INACTIVO'}}</span>
                          </label>
                      </div>
                  </div>
              </div>

          </form>
        <hr>
          <div class="float-end">
              <button type="button" (click)="addActivity()" class="btn-gm-danger">
                  <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Actividad
              </button>
          </div>

          <div class="responsive-table">
              <table class="table table-lg table-hover table-striped table-sm">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Actividad</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Acciones</th>
                  </tr>
                  </thead>
                  <tbody class="table-group-divider">
                  <tr *ngFor="let v of eventDetails ; let i=index">
                      <th scope="row">{{i + 1}}</th>
                      <td data-title="Evento"><input type="text" class="form-control form-control-sm"
                                                     [(ngModel)]="v.nombre"></td>
                      <td data-title="Descripcion"><input type="text" class="form-control form-control-sm" ngbDatepicker
                                                          #d2="ngbDatepicker"
                                                          (click)="d2.toggle()" [(ngModel)]="v.fecha"
                                                          placeholder="Fecha">
                      </td>
                      <td data-title="Acciones">
                          <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                                  title="{{ abcForms.btnDelete.label }}" (click)="goDelete(i)">
                              <span class="{{ abcForms.btnDelete.icon }}"></span>
                          </button>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>

          <hr>

          <form [formGroup]="eventForm" class="row mt-2 d-flex justify-content-start align-items-center ">
              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Ciclo. </b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="ciclo"
                              id="ciclo">
                          <option value=0>Seleccione Ciclo</option>
                          <option *ngFor="let l of cycles" [value]="l.id">
                              {{l.id}}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="form-group col-md-3 ">
                  <div class="input-group input-group-sm input-group-rounded row mx-auto">
                      <label class="col-form-label"><b>Grupo.</b> </label>
                      <select class="form-control form-select form-control-sm" formControlName="grupo"
                              id="grupo">
                          <option value=0>Seleccione Grupo</option>
                          <option *ngFor="let l of groups" [value]="l.id">
                              {{l.id}}
                          </option>
                      </select>
                  </div>
              </div>
          </form>
      </div>
      <hr>
      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Código</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Ciclo</th>
                  <th scope="col">Grupo</th>
                  <th scope="col">Institucion</th>
                  <th scope="col">Filial</th>
                  <th scope="col">Facultad</th>
                  <th scope="col">E.P</th>
                  <th scope="col">Estado</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of persons ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="Código">{{v.codigo}}</td>
                  <td data-title="DNI">{{v.dni}}</td>
                  <td data-title="Nombres">{{v.nombres}}</td>
                  <td data-title="Ciclo">{{v.ciclo}}</td>
                  <td data-title="Grupo">{{v.grupo}}</td>
                  <td data-title="Institucion">{{v.escuelaProfesional!.facultad!.filial!.institucion!.descripcion!}}</td>
                  <td data-title="Filial">{{v.escuelaProfesional!.facultad!.filial!.descripcion!}}</td>
                  <td data-title="Facultad">{{v.escuelaProfesional!.facultad!.descripcion!}}</td>
                  <td data-title="E.P.">{{v.escuelaProfesional!.descripcion!}}</td>
                  <td data-title="Estado">
                        <span class="badge text-bg-{{v.estado?'success': 'danger'}} text-white">
                            {{v.estado ? 'Activo' : 'Inactivo'}}
                        </span>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>

      <div class="float-end">
        <button type="button" class="btn-gm-danger" (click)="personTution()">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> Matricular
        </button>
      </div>

      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Código</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Ciclo</th>
                  <th scope="col">Grupo</th>
                  <th scope="col">Institucion</th>
                  <th scope="col">Filial</th>
                  <th scope="col">Facultad</th>
                  <th scope="col">E.P</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Acciones</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of personsTutions ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="Código">{{v.codigo}}</td>
                  <td data-title="DNI">{{v.dni}}</td>
                  <td data-title="Nombres">{{v.nombres}}</td>
                  <td data-title="Ciclo">{{v.ciclo}}</td>
                  <td data-title="Grupo">{{v.grupo}}</td>
                  <td data-title="Institucion">{{v.escuelaProfesional!.facultad!.filial!.institucion!.descripcion!}}</td>
                  <td data-title="Filial">{{v.escuelaProfesional!.facultad!.filial!.descripcion!}}</td>
                  <td data-title="Facultad">{{v.escuelaProfesional!.facultad!.descripcion!}}</td>
                  <td data-title="E.P.">{{v.escuelaProfesional!.descripcion!}}</td>
                  <td data-title="Estado">
                        <span class="badge text-bg-{{v.estado?'success': 'danger'}} text-white">
                            {{v.estado ? 'Activo' : 'Inactivo'}}
                        </span>
                  </td>

                  <td data-title="Acciones">

                      <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                              title="{{ abcForms.btnDelete.label }}" (click)="goDeletePerson(i)">
                          <span class="{{ abcForms.btnDelete.icon }}"></span>
                      </button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
      <div>
          <div class="mt-4 d-flex justify-content-end">
              <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
                  <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
              </button>
              <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()"
                      [disabled]="eventForm.invalid">
                  <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
              </button>
          </div>
      </div>
  `
})
export class EventNewComponent implements OnInit {
  //@Input() title: string = '';
  abcForms: any;
  public error: string = '';
  public institutions: Institution[] = [];
  public subsidiarys: Subsidiary[] = [];
  public facultys: Faculty[] = [];
  public profesionalSchools: ProfessionalSchool[] = [];
  public cycles: Cycle[] = [];
  public groups: Group[] = [];
  public eventDetails: any[] = [];
  public persons: Person[] = [];
  public personsTutions: Person[] = [];
  eventForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tolerancia: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    estado: new FormControl(true, [Validators.required]),
    institucionId: new FormControl(0, [Validators.required]),
    filialId: new FormControl(0, [Validators.required]),
    facultadId: new FormControl(0, [Validators.required]),
    escuelaProfesionalId: new FormControl(0, [Validators.required]),
    escuelaProfesional: new FormControl({}),
    ciclo: new FormControl(''),
    grupo: new FormControl(''),
    eventoDetalles: new FormControl([[]]),
    matriculas: new FormControl([]),
  });


  constructor(
    private cycleService: CycleService,
    private groupService: GroupService,
    private personService: PersonService,
    private eventService: EventService,
    private institutionService: InstitutionService,
    private subsidiaryService: SubsidiaryService,
    private facultyService: FacultyService,
    private professionalSchoolService: ProfessionalSchoolService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.abcForms = abcForms;
    this.getInstitutions();

    this.eventForm.controls['institucionId'].valueChanges.subscribe(val => {
      this.getSubsidiarys(val!);
    });
    this.eventForm.controls['filialId'].valueChanges.subscribe(val => {
      this.getFacultys(val!);
    });
    this.eventForm.controls['facultadId'].valueChanges.subscribe(val => {
      this.getProssionalSchool(val!);
    });
    this.eventForm.controls['escuelaProfesionalId'].valueChanges.subscribe(val => {
      this.getCycles(val!);
    });
    this.eventForm.controls['ciclo'].valueChanges.subscribe(val => {
      this.getGroups(val!);
    });
    this.eventForm.controls['grupo'].valueChanges.subscribe(val => {
      this.getPersons(val!);
    });
    this.eventDetails.push({nombre: '', fecha: this.sysDate()});
  }

  public getCycles(idEscuelaProfesional: number): void {
    this.cycleService.getWithQuery$({idEscuelaProfesional: idEscuelaProfesional}).subscribe(response => {
      this.cycles = response;
    });

  }

  public getGroups(cycle: string): void {
    const params: any = {};
    params.idEscuelaProfesional = this.eventForm.value.escuelaProfesionalId;
    params.ciclo = cycle;
    this.groupService.getWithQuery$(params).subscribe(response => {
      this.groups = response;
    });
  }

  public addActivity(): void {
    this.eventDetails.push({nombre: '', fecha: this.sysDate()})
  }

  public getInstitutions(params?: Object): void {
    this.institutionService.getWithQuery$(params).subscribe(response => {
      this.institutions = response;
    }, error => {
      this.error = error;
    });
  }

  public getSubsidiarys(idInstitution: number): void {
    this.subsidiaryService.getByInstitutionId$(idInstitution).subscribe(response => {
      this.subsidiarys = response;
    }, error => {
      this.error = error;
    });
  }

  public getFacultys(idSubsidiary: number): void {
    this.facultyService.getBySubsidiaryId$(idSubsidiary).subscribe(response => {
      this.facultys = response;
    }, error => {
      this.error = error;
    });
  }


  public getProssionalSchool(idFaculty: number): void {
    this.professionalSchoolService.getByFacultyId$(idFaculty).subscribe(response => {
      this.profesionalSchools = response;
    }, error => {
      this.error = error;
    });
  }

  public getPersons(grupo: string): void {
    const params: any = {};
    params.ciclo = this.eventForm.value.ciclo;
    params.grupo = grupo;
    params.escuelaProfesionalId = this.eventForm.value.escuelaProfesionalId;
    this.personService.getForTuition$(params).subscribe(response => {
      this.persons = response;
    }, error => {
      this.error = error;
    });
  }

  public goDelete(i: number): void {
    this.eventDetails.splice(i, 1);

  }

  public goDeletePerson(i: number): void {
    this.persons.splice(i, 1);
  }

  public personTution(): void {
    this.personsTutions = [...this.personsTutions, ...this.persons]
    this.persons = [];
  }

  public saveForm(): void {
    const professionalSchool: any = {};
    professionalSchool.id = this.eventForm.value.escuelaProfesionalId;
    this.eventForm.value.escuelaProfesional = professionalSchool;
    const datesArray: EventDetail[] = [];
    this.eventDetails.forEach(data => {
      // @ts-ignore
      datesArray.push({
        nombre: data.nombre,
        fecha: `${data!.fecha?.year}-${this.addZero(data.fecha!.month)}-${this.addZero(data.fecha!.day)}`
      });
    });
    // @ts-ignore
    this.eventForm.value.eventoDetalles = datesArray;
    const listPersons: any[] = [];
    this.personsTutions.map(data => {
        const dataPerson: any = {};
        dataPerson.personaId = data.id;
        listPersons.push(dataPerson);
      }
    );
    // @ts-ignore
    this.eventForm.value.matriculas = listPersons;
    if (this.eventForm.valid) {
      // @ts-ignore
      this.confirmDialogService.confirmSave().then(() => {
        this.eventService.add$(this.eventForm.value).subscribe(response => {
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

  private addZero(value: string): string {
    let dataValue: string;
    if (+value < 10) {
      dataValue = '0' + value.toString();
    } else {
      dataValue = value;
    }
    return dataValue;
  }

  private sysDate(sumDays?: any): {} {
    const today = new Date();
    if (sumDays) {
      today.setDate(today.getDate() + parseInt(sumDays));
    }
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return {year: +yyyy, month: +mm, day: +dd};
  }


}
