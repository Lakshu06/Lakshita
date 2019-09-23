import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SortablecolumnComponent } from './sortablecolumn/sortablecolumn.component';
import { SortableTableDirective } from './sortble-table-direction/sortble-table-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortablecolumnComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
