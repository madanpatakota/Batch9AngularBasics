import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
   bootstrap: [AppComponent]
  //bootstrap: [CompAComponent]
})


export class AppModule { }
