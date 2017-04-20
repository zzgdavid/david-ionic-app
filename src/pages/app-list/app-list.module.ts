import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppList } from './app-list';

@NgModule({
  declarations: [
    AppList,
  ],
  imports: [
    IonicPageModule.forChild(AppList),
  ],
  exports: [
    AppList
  ]
})
export class AppListModule {}
