import { Component } from '@angular/core';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  content = 'hello, content'

  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }
}
