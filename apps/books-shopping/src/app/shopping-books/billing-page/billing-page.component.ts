import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { from, ObjectUnsubscribedError } from 'rxjs';
import{GenericValidator} from '../../shared/generic-validator'
import { BookItems } from '../book';
import { OrderDetails } from '../orderDetails';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent {
  billingForm:FormGroup;
  private validationMessages: { [key: string]: { [key: string]: string } };
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private book:BookItems;
  private orderDetails:OrderDetails;

  constructor(private dialog:MatDialog,private _activatedRoute:ActivatedRoute,private _service:SearchService) { 
    this.validationMessages ={
      name: {
        required: 'Name is Required'
      },
      email: {
        required: 'Email Required',
        email: 'Please enter right email format (ex: test@xyz.com)'
      },
      phoneNumber: {
        required: 'phoneNumber Required',
        minlength: 'The phoneNumber should be 10'
      },
      address: {
        required: 'address Required'
      },
  
    };
    this.genericValidator =new GenericValidator(this.validationMessages);
  }



  

ngOnInit(){
  this.billingForm=new FormGroup({
    name:new FormControl('',Validators.required) ,
    email:new FormControl('',[Validators.required,Validators.email]) ,
    phoneNumber:new FormControl('',[Validators.required,Validators.minLength(10)]) ,
    address:new FormControl('',Validators.required) 
   })
   this.billingForm.valueChanges.subscribe(
    value => this.displayMessage = this.genericValidator.processMessages(this.billingForm)
   );

   const object= window.history.state;
   this.book=object as BookItems;


  }
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.billingForm);
  }

   onSubmit(form){
     if(form.valid){
       const orderDetails={
        name: form.value.name,
         email:form.value.email,
         phoneNumber:form.value.phoneNumber,
         address:form.value.address
       }
      this.dialog.open(DialogElementsExampleDialog);
      this._service.deleteFromCart(this.book.id);
      this._service.addToMyCollection(orderDetails,this.book);
     }
     else{
      Object.keys(form.controls).forEach((key:string)=>{
           const c=form.get(key)
           if(!c.valid){
             const message=this.validationMessages[key];
             for(const errorKey in c.errors){
               this.displayMessage[key]=message[errorKey];
             }

           }
           
      });

     }
   
   }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

}
