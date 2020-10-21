import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
  toChild: string;
  fromChild: string;

  constructor() { }

  ngOnInit(): void {
  }


  childToParent(event) {
    this.fromChild = event;
  }
}
