import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.scss']
})
export class LifeCycleParentComponent implements OnInit {
  hookLog: string[];
  private logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }
  ngOnInit(): void {
  }

}
