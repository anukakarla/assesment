import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-render',
  template: `<div class="icons">
    <img (click)="check()" [src]="path + downloadIcon" width="20px" alt="" />

    <img (click)="check()" [src]="path + fileIcon" width="16px" alt="" />

    <img (click)="check()" [src]="path + mailIcon" width="20px" alt="" />
  </div>`,
  styles: [
    `
      .icons {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 100%;
      }
      img {
        filter: invert(18%) sepia(89%) saturate(2476%) hue-rotate(196deg)
          brightness(118%) contrast(119%);
      }
    `,
    `
      button {
        background: none;
        border: 1px solid indigo;
      }
    `,
  ],
})
export class AgRenderComponent implements ICellRendererAngularComp {
  value: any;
  constructor() {}
  path = '../../../../assets/';
  downloadIcon = 'download.svg';
  fileIcon = 'file.svg';
  mailIcon = 'mail.svg';

  public params!: ICellRendererParams;
  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;
  }
  check() {
    alert('okay tested');
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }
}
