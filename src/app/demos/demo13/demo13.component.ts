import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrl: './demo13.component.scss'
})
export class Demo13Component implements OnInit {

  // TWB

  lastname: string = "";
  email: string = "";
  password: string = "";
  html: boolean = false;
  css: boolean = false;
  javascript: boolean = false;
  angular: boolean = false;
  react: boolean = false;

  onSubmitTWB() {
    console.log(this.lastname);
    console.log(this.email);
    console.log(this.password);
    console.log(this.html);
    console.log(this.css);
    console.log(this.javascript);
    console.log(this.angular);
    console.log(this.react);

    // Toutes les validations à faire manuellement 

    // Envoyer...
  }


  // Avec Validators

  myForm!: FormGroup; // Ne pas oublier d'ajouter : ReactiveFormsModule au module

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      html: [false, []],
      css: [false, []],
      javascript: [false, []],
      angular: [false, []],
      react: [false, []],
      termes: [false, [Validators.requiredTrue]]
    });
  }

  onSubmitValidators() {
    // ....

    if (this.myForm.valid) {
     
      // Envoie des données ...

    }
    else {
      
      if (this.myForm.controls['lastname'].invalid) {
        console.log("Champ lastname invalid")
      }

    

    }

  }

}
