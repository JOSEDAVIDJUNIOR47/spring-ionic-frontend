import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PichAddressPage } from './pich-address';

@NgModule({
  declarations: [
    PichAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(PichAddressPage),
  ],
})
export class PichAddressPageModule {}
