import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.scss'
})
export class Demo01Component implements OnInit, OnDestroy {


  // Primitives Types
  variable1: string = "Hello, world !";
  variable2: number = 42;
  variable3: boolean = true;

  // Array 
  variable4: string[] = ["hello", "world", "!"];
  variable5: number[] = [1, 2, 3];
  variable6: boolean[] = [true, false];

  variable7!: string; // Definite assigment assertion
  declare variable8: number; // Ambient declaration
  
  // Any
  variable9: any[] = [ 42, "Hello", () => {} ];

  // Méthodes
  variable10 = function () {}; // Avant ES6
  variable11 = () => {}; // ES6 (2015)

  variable12: (a: number, b: number) => number = (a, b) => a + b;
  variable13: (a: number, b: number) => number = (a, b) => { return a + b };


  // Undefined
  variable14?: string;

  // Utilisée pour initialisation des variables
  // L'inscription aux obversables
  // ...
  ngOnInit(): void {
    this.variable7 = "Hello";
    this.variable8 = 42;
  }

  // Utilisée pour le nettoyage
  // Désinscription aux observables
  // Nettoyage des flux...
  ngOnDestroy(): void { }

}
