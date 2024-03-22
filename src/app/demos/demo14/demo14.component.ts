import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { nameValidator } from '../../shared/validators/name.validator';
import { emailValidator } from '../../shared/validators/email.validator';
import { passwordCheckValidator } from '../../shared/validators/password-check.validator';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrl: './demo14.component.scss'
})
export class Demo14Component implements OnInit {
  formGroup!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      name: ['Quentin', [ nameValidator ]],
      email: ['quentin.geerts@bstorm.be', [emailValidator]],
      password: ['Test1234=', []],
      passwordCheck: ['Test1234=', []]
    }, { 
      validators: passwordCheckValidator
    });
  }

  send() {
    // ...
  }
}
