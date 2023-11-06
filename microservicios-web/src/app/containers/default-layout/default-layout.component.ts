import {Component, OnInit} from '@angular/core';

import {INavData} from "@coreui/angular";
import {navItems} from "./_nav";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-header/default-header.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  public navItems: INavData[] = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {
  }

  ngOnInit() {
  }
}
