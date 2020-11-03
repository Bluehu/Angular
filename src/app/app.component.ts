import { Component, OnInit } from '@angular/core';
import { TopMenu } from './nav-bar/nav-bar.component';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-project';
  content = 'hello, content'
  items: TopMenu[]
  activeItem: TopMenu;

  constructor(private http: HttpService) {
    // this.items = [];
    // this.items.push({ label: 'demo', routerLink: '/demo' });
    // this.items.push({ label: 'comunication', routerLink: '/comunication' });
    // this.items.push({ label: 'lifecycle', routerLink: '/lifecycle' });
    // this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    this.loadNavbar();
  }

  loadNavbar() {
    this.http.getMenuList().subscribe((data: any) => {
      this.items = [];
      data.map(item => {
        this.items.push({ label: item.label, routerLink: item.routerLink });
      })
      this.activeItem = this.items[0];
      console.log("formatedData",this.items);
    });
  }

}
