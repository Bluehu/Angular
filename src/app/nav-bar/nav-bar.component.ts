import { Component, OnInit, Input } from '@angular/core';

export interface TopMenu {
  label: string,
  routerLink: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  titleActiveColor = "red";
  titleColor = "#000";

  redirectTo: string
  @Input() menus: TopMenu[] = [];

  constructor() { }

  ngOnInit() { }
}
