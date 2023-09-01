import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  // i am going to take the textbox reference
  // then i will get the value.

  @ViewChild('customerName') vCustomerName: ElementRef<any>;
  //              var          customername  :  string

  displayName = '';

  isCustomerHavingData = false;
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
}
