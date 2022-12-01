import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '@collab/comp-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AgRenderComponent } from './ag-render/ag-render.component';

@NgModule({
  declarations: [AppComponent, PageComponent, AgRenderComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AgGridModule,
  ],
})
export class AppModule {}
