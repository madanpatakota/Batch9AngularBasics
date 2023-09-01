import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { FormsModule } from '@angular/forms';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { NgBindingComponent } from './ng-binding/ng-binding.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CustomerSignupComponent,
    NgBindingComponent,
    CompBComponent
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
