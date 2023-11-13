import {Component, OnInit} from '@angular/core';
import {Client} from "../models/client";
import {ClientsService} from "../../../../../providers/services/setup/clients.service";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-client-list [clients]="clients"

    ></app-client-list>
  `
})

export class ClientContainersComponent implements OnInit {
  public clients: Client[] = [];

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.getClients();
  }

  public getClients(): void {

    this.clientsService.getAll$().subscribe(response => {
      console.log(response);
      this.clients = response;
    });
  }

}
