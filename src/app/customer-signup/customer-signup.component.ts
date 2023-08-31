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

    
    /*ngIf*/
    customerEligibility = false;



    /*Local Reference */
    myAnswer  = "";
    btnClick(question:HTMLParagraphElement){
      if(question.innerText == "Hey !! How are you doing?"){
        this.myAnswer = " I am Excellent !!!!";
      }
    }


    /*ngIf else ngtemplate local*/
    customerIsAdmin = true;



    /*ngFor*/

    customerExperience = [
      'He Likes the Non Veg Food',
      'He dislike in Reception the way they talk in Restaurent',
      'He went with his 4 freinds'
    ];




}
