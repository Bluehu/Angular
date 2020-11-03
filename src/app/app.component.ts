import { Component } from '@angular/core';
import { TopMenu } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  content = 'hello, content'
  items: TopMenu[]
  activeItem: TopMenu;

  constructor() {
    this.items = [];
    this.items.push({ label: 'demo', routerLink: '/demo' });
    this.items.push({ label: 'comunication', routerLink: '/comunication' });
    this.items.push({ label: 'lifecycle', routerLink: '/lifecycle' });
    this.activeItem = this.items[0];
  }

}
