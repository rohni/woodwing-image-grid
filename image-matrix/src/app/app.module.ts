import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridCellComponent } from './grid-cell/grid-cell.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, GridCellComponent, ImageGridComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
