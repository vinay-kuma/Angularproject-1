import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(),
    human: new FormControl(),
    country: new FormControl()
  });
  

  
  // contactForm = new FormGroup({
  //   name: new FormControl(),
  //   human: new FormControl(),
   
  //   country: new FormControl()
  //  }) 


  ngOnInit(): void {
  }

  onSubmit() {
  console.log(this.contactForm.value);
}
}
