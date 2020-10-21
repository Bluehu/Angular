import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { CommunicationComponent } from './communication/communication.component';
import { ParentChildComponent } from './communication/parent-child/parent-child.component';
import { ChildComponent } from './communication/parent-child/child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    ParentChildComponent,
    ChildComponent,
    LifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
