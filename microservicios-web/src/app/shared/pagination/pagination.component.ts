import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  // styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  perpages = [
    {id: 15, active: true},
    {id: 30, active: false},
    {id: 50, active: false},
    {id: 100, active: false},
  ];
  ver_por_pagina: number | undefined;
  current_page: number | undefined;
  // @ts-ignore
  @Input() pagination: PaginationChangeEvent;
  // @ts-ignore
  // @ts-ignore
  /******* *****************/
  @Input() isDisabled: boolean | undefined;
  // @ts-ignore
  @Output() eventPaginate = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.ver_por_pagina = 15;
    this.current_page = 1;
  }

  changeValuePage(event: any) {
    this.ver_por_pagina = event.value;
    this.eventPaginate.emit({
      page: this.current_page,
      ver_por_pagina: this.ver_por_pagina,
    });
  }

  public loadPage($event: any) {
    this.current_page = $event;
    this.eventPaginate.emit({
      page: $event,
      ver_por_pagina: this.ver_por_pagina,
    });
  }

}

export interface PaginationChangeEvent {
  total_lista: number;
  ultima_pagina: string;
  pagina_actual: number;
  ver_por_pagina: number;
  total_por_pagina: string;
  pagina_anterior: string;
  pagina_siguiente: string;
  preventDefault: () => void;

}
