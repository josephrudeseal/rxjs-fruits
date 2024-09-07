import { NgModule } from '@angular/core';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ScanComponent],
  imports: [
    SharedModule,
    ScanRoutingModule
  ]
})
export class ScanModule { }
