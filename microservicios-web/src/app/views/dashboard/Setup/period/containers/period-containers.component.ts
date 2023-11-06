import {Component, OnInit} from '@angular/core';
import {ConfirmDialogService} from '../../../../../shared';
import {ActivatedRoute, Router} from "@angular/router";
import {Period} from "../models/period";
import {PeriodService} from "../../../../../providers/services";

@Component({
  selector: 'app-attendance-container',
  template: `
    <app-period-list [periods]="periods"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"
                     (eventNew)="eventNew($event)"
    ></app-period-list>
  `
})

export class PeriodContainersComponent implements OnInit {
  public error: string = '';
  public periods: Period[] = [];
  public period = new Period();


  constructor(
    private periodService: PeriodService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPeriods();
  }

  public getPeriods(params?: Object): void {
    this.periodService.getWithQuery$(params).subscribe(response => {
      this.periods = response;
    }, error => {
      this.error = error;
    });
  }

  public eventNew($event: boolean): void {
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  }

  public eventEdit(idPeriod: number): void {
    this.router.navigate(['edit', {idPeriod: idPeriod}], {relativeTo: this.route});
  }

  public eventDelete(idPeriod: number): void {
    this.confirmDialogService.confirmSave().then(() => {
      this.periodService.delete$(idPeriod).subscribe(response => {
        if (response) {
          this.getPeriods();
        }

      });
    }).catch(() => {
    });
  }
}
