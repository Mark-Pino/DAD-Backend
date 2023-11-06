import {Component, OnInit} from '@angular/core';
import {ConfirmDialogService} from '../../../../../shared';
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../models/event";
import {EventService} from "../../../../../providers/services/event/event.service";

@Component({
  selector: 'app-event-container',
  template: `
    <app-event-list [events]="events"
                    (eventEdit)="eventEdit($event)"
                    (eventDelete)="eventDelete($event)"
                    (eventNew)="eventNew($event)"
    ></app-event-list>
  `
})

export class EventContainersComponent implements OnInit {
  public error: string = '';
  public events: Event[] = [];
  public event = new Event();


  constructor(
    private eventService: EventService,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents(params?: Object): void {
    this.eventService.getWithQuery$(params).subscribe(response => {

      this.events = response;
    }, error => {
      this.error = error;
    });
  }

  public eventNew($event: boolean): void {
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  }

  public eventEdit(idEvent: number): void {
    this.router.navigate(['edit', {idEvent: idEvent}], {relativeTo: this.route});
  }

  public eventDelete(idEvent: number): void {
    this.confirmDialogService.confirmSave().then(() => {
      this.eventService.delete$(idEvent).subscribe(response => {
        if (response) {
          this.getEvents();
        }

      });
    }).catch(() => {
    });
  }
}
