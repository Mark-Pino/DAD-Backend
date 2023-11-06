import {Component, OnInit} from '@angular/core';
import {ConfirmDialogService} from '../../../../../shared';
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../models/person";
import {PersonService} from "../../../../../providers/services/setup/person.service";

@Component({
  selector: 'app-person-container',
  template: `
    <app-person-list [persons]="persons"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"
                     (eventNew)="eventNew($event)"
    ></app-person-list>
  `
})

export class PersonContainersComponent implements OnInit {
  public error: string = '';
  public persons: Person[] = [];
  constructor(
    private personService: PersonService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPersons();
  }

  public getPersons(params?: Object): void {
    this.personService.getWithQuery$(params).subscribe(response => {
      this.persons = response;
    }, error => {
      this.error = error;
    });
  }

  public eventNew($event: boolean): void {
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  }

  public eventEdit(idPerson: number): void {
    this.router.navigate(['edit', {idPerson: idPerson}], {relativeTo: this.route});
  }

  public eventDelete(idPeriod: number): void {
    this.confirmDialogService.confirmDelete().then(() => {
      this.personService.delete$(idPeriod).subscribe(response => {
        if (response) {
          this.getPersons();
        }

      });
    }).catch(() => {
    });
  }
}
