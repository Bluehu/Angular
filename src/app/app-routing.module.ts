import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CommunicationComponent } from './communication/communication.component';
import { LifeCycleParentComponent } from './life-cycle/life-cycle-parent/life-cycle-parent.component';

const routes: Routes = [
  //地址栏是demo时调用DemoComponent组件
  { path: 'demo', component: DemoComponent },
  //地址栏是comunication时调用CommunicationComponent组件
  { path: 'comunication', component: CommunicationComponent },
  //地址栏是lifecycle时调用LifeCycleParentComponent组件
  { path: 'lifecycle', component: LifeCycleParentComponent },
  //地址栏是任意字符时，调用 DemoComponent组件，即默认路由
  { path: '**', redirectTo: '/demo' } //这里是2个*号，这个必须放在最后面
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * 第一步：给项目添加angular 路由模块
 * ng  g  module  app-routing  --flat  --module=app
 *
 * 第二步：在app-routing文件中引入RouterModule模块
 * const routes: Routes = [];
 * 
 * imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 *
 * 第三步：为项目设置路由：
 *
 */

