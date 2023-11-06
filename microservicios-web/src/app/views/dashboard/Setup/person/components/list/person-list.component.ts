import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Person} from "../../models/person";


@Component({
  selector: 'app-person-list',
  template: `
      <div class="float-end">
          <button type="button" (click)="goNew()" class="btn-gm-danger">
              <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Persona
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

                  <td data-title="Acciones">
                      <button type="button" class="btn-gm-sm btn btn-warning btn-gm-small"
                              title="{{ abcForms.btnEdit.label }}" (click)="goEdit(v.id!)">
                          <span class="{{ abcForms.btnEdit.icon }}"></span>
                      </button>
                      <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                              title="{{ abcForms.btnDelete.label }}" (click)="goDelete(v.id!)">
                          <span class="{{ abcForms.btnDelete.icon }}"></span>
                      </button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
  `,
})

export class PersonListComponent implements OnInit {
  abcForms: any;
  @Input() persons: Person[] = [];
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventEdit = new EventEmitter<number>();
  @Output() eventDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.abcForms = abcForms;
  }
  public goNew(): void {
    this.eventNew.emit(true);
  }
  public goEdit(id: number): void {
    this.eventEdit.emit(id);
  }

  public goDelete(id: number): void {
    this.eventDelete.emit(id);
  }
}
