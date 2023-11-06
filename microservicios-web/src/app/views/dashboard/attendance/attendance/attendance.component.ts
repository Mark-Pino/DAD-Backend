import {Component, OnInit} from '@angular/core';
import {abcForms} from "../../../../../environments/generals";

@Component({
  template: `
    <div class="card shadow-gm-card m-1">
      <div class="card-body">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AttendanceComponent implements OnInit {

  public title: string = '';
  abcForm: any;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Asistencia';
    this.abcForm = abcForms;
  }

}
