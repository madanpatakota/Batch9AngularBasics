import { Component, ContentChild, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  // i am going to take the textbox reference
  // then i will get the value.

  @ViewChild('customerName') vCustomerName   : ElementRef<any>;
  //              var          customername  :  string

  

  displayName = '';

  isCustomerHavingData = false;
  // 1. Viewchild which is useful for capture the element in the typescript file
  
  //Q) How do you take the value from element?
  // A : you have to get the nativelement from the viewchild


  btnClick() {
    //console.log("you have entered the value :");
    //  console.log(this.vCustomerName); // elementref
    //  console.log(this.vCustomerName.nativeElement); // Input type text
    //  console.log(this.vCustomerName.nativeElement.value);
    console.log(
      'you have entered the value :',
      this.vCustomerName.nativeElement.value
    );

    let elValue = this.vCustomerName.nativeElement.value;   // textbox value
    if (elValue.length > 0) {
      this.isCustomerHavingData = true;
      this.displayName = elValue;
    } else {
      this.isCustomerHavingData = false;
    }
  }

 
 /*ContentChild*/
 /*content of the compoennt*/
  displayEmployeeName = "";
  @ContentChild('employeeName') vEmployeeName : ElementRef<any>;
  evtGetEmployeeName(){
     this.displayEmployeeName =  this.vEmployeeName.nativeElement.value
  }



  /* ngContainer */
  numbers = [1,2,3,4];


  /* templareRef */
  @ViewChild('CustomerTemplate') vCustomerTemplate : TemplateRef<any>;
  @ViewChild('CustomerName') vCustomerNameelement  : ElementRef<any>;

  //displayCustom
  displayCustomerTemplate : TemplateRef<any>;
 
  btnGetCustomerTemplate(){
     let customerTemplate =  this.vCustomerTemplate;
     this.displayCustomerTemplate = customerTemplate;
     console.log(this.displayCustomerTemplate);
  }


}
