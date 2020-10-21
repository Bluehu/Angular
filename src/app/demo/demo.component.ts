import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  cities1: SelectItem[];


  selectedCity1: City;
  constructor() { 
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{name: 'New York', code: 'NY'}},
      {label:'Rome', value:{name: 'Rome', code: 'RM'}},
      {label:'London', value:{name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{name: 'Paris', code: 'PRS'}}
  ];

  }

  ngOnInit(): void {
  }

}
