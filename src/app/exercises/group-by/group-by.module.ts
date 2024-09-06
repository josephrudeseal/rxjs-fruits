import { NgModule } from '@angular/core';

import { GroupByRoutingModule } from './group-by-routing.module';
import { GroupByComponent } from './group-by.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GroupByComponent],
  imports: [
    SharedModule,
    GroupByRoutingModule
  ]
})
export class GroupByModule { }
