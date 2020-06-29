import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  name:FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;
  recaptchaReactive: FormControl
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.name = new FormControl('', Validators.required);
    this.recaptchaReactive = new FormControl(null, Validators.required)
    this.subject = new FormControl('', Validators.required);
    this.message = new FormControl('', Validators.required);

  }

  createForm() {
    this.contactForm = new FormGroup({
      email: this.email,
      name: this.name,
      recaptchaReactive: this.recaptchaReactive,
      subject: this.subject,
      message: this.message
    }, {
        updateOn: 'submit'
      });
  }

}
