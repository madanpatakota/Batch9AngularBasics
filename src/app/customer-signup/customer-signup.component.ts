import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {

    zoneType = 'red';


    /*ngStyle*/
    zoneSafeStatus   = true;
    zoneBorderStatus = false;
    zonemaxWidth     = false;


    /*ngClass*/
     employeeStatus  = false;



}
