import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-render',
  template: `#{{ value }}`,
  styles: [],
})
export class AgRenderComponent implements ICellRendererAngularComp {
  value: any;
  constructor() {}
  public params!: ICellRendererParams;
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.getValue;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }
}
