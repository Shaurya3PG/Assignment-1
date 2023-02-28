import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
      userData:any;
      UserName={name:'',collegeName:'',gmail:'',specialization:'',degrees:''}
      degree=['BTech', 'BBA', 'BCom', 'Others'];
  
      @ViewChild('signin')
       signUpForm!: NgForm ;
       signUp!:ElementRef;
  
      constructor() { }
      ngOnInit(): void {
        this.userData=[];
        this.UserName={...this.signUpForm.value};
      }
      onSubmit(){
          this.UserName={...this.signUpForm.value};
          this.signUpForm.reset();
      }
      submit(){
        if(this.signUpForm.valid){
          this.userData.push(this.signUpForm.value);
          this.signUpForm.reset();
        }
        else{
          alert("Enter Correct Details!!");
        }
      }
    }
