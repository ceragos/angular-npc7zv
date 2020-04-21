import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DubsLayoutComponent } from './dubs-layout/dubs-layout.component';
import { DubsFooterComponent } from './dubs-footer/dubs-footer.component';
import { DubsHeaderComponent } from './dubs-header/dubs-header.component';



@NgModule({
  declarations: [
    DubsLayoutComponent,
    DubsFooterComponent,
    DubsHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DubsLayoutComponent,
    DubsFooterComponent,
    DubsHeaderComponent
  ]
})
export class SharedModule { }
