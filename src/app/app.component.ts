import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(){
       console.log("applicaiton  component has loaded");
    }

    /* Data binding */
    /*1.string interpolation or string data binding*/
     ProjectName = "Angular";
     title       = "Basic App";

     getCustomerName(){
       return "Robert.Jr";
     }

     /*2.Property data binding*/
     /* you have to bind the data to the property */
      employeeRole = "Admin";
      inputType    = "checkbox";
      isDisabled   =  true;


      /*3.Event Data binding*/
     /* you have to bind the method to the event */
     buttonClick(){
        console.log("Button Fired!!!!");
        window.alert(("Message is ").concat(this.ProjectName))
     }

      //a : unknown =  1;

    textKeyEvent(eventDetails:KeyboardEvent){
        // console.log("key event Fired........");
        // console.log(eventDetails);
       // this.a as number
       let element = eventDetails.target as HTMLInputElement;
       console.log(element.value);
     }

     



     /* event databinding and property databinding*/


     CustomerPeterLocation = "London";
     
     evtCustomerLoctionKeyUp($eventDetails : KeyboardEvent){
          let element = $eventDetails.target as HTMLInputElement;
          this.CustomerPeterLocation = element.value;
     }


     /*Angular with (ngmodelChange) and [ngModel]*/

     CustomerJohnLocation = "Paris";
     
     evtCustomerLoctionModelChange($eventDetails : string){
          this.CustomerJohnLocation = $eventDetails
     }




     /*Two Way Databinding =  /*
     /* [] */
     /* () */
     /* {{}} */
     /* [()] */

     guestName     = "Robert";
     guestLocation = "Bangolore";










}
