import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() heardFromParent: string

  toParent: string;
  @Output()
  public follow = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  public childSays(event): void {
    this.follow.emit(event);
  }

  getApproved(){
    alert("爸爸，你最帅");
  }

  getReject(){
    alert("妈，爸爸藏私房钱了");
  }

}
