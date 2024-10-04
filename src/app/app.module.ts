import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [], // Declare AppComponent if it's not standalone
  providers: [],
  bootstrap: [] // Bootstrap AppComponent
})
export class AppModule { }
