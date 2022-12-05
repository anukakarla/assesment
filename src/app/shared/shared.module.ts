import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableGridPaginationComponent, UiModule } from '@collab/comp-library';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './component/header/header.component';
import { ModalComponent } from './component/modal/modal.component';
import { TableGridComponent } from './component/table-grid/table-grid.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule, AgGridModule],
  declarations: [HeaderComponent, TableGridComponent, ModalComponent],
  providers: [],
  exports: [UiModule, HeaderComponent, TableGridComponent, ModalComponent],
})
export class SharedModule {
  constructor() {}
}
