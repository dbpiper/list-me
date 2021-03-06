import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
