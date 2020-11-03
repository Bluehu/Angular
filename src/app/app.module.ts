import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { CommunicationComponent } from './communication/communication.component';
import { ParentChildComponent } from './communication/parent-child/parent-child.component';
import { ChildComponent } from './communication/parent-child/child/child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleParentComponent } from './life-cycle/life-cycle-parent/life-cycle-parent.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    ParentChildComponent,
    ChildComponent,
    LifeCycleComponent,
    LifeCycleParentComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DemoModule,
    AppRoutingModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
