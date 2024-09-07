import { GroupByRoutingModule } from './group-by-routing.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { GroupByComponent } from './group-by.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: GroupByComponent }];

@NgModule({
  declarations: [GroupByComponent],
  imports: [
    SharedModule,
    GroupByRoutingModule
  ]
})
export class GroupByModule { }
