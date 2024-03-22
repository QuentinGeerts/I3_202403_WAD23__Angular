import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrl: './demo15.component.scss'
})
export class Demo15Component implements OnInit, DoCheck {

  id!: number;
  name!: string;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  // Hook qui vérifie les changements à chaque modification du DOM virtuel
  ngDoCheck(): void {
    if (this._activatedRoute.snapshot.params['id']) {
      this.id = this._activatedRoute.snapshot.params['id'];
    }

    if (this._activatedRoute.snapshot.queryParams['name']) {
      this.name = this._activatedRoute.snapshot.queryParams['name'];
    }
  }

  ngOnInit(): void {
    console.log("_router: ", this._router);
    console.log("_activatedRoute: ", this._activatedRoute);

    // Vérification et récupération de l'id dans l'URL
    // if (this._activatedRoute.snapshot.params['id']) {
    //   this.id = this._activatedRoute.snapshot.params['id'];
    // }

    // Vérification et récupération de l'objet
    if (this._activatedRoute.snapshot.queryParams['name']) {
      this.name = this._activatedRoute.snapshot.queryParams['name'];
    }
  }

  navigate(): void {
    this._router.navigate(['demos', 'routing']);
    // this._router.navigateByUrl('demos/routing');
  }

  navigateWithParams(id: number) {
    this._router.navigate(['demos', 'routing', id]); // Le paramètre de route sera traité par ':id' dans le router
  }

  navigateWithQueryParams(name: string) {
    this._router.navigate(['demos', 'routing'], { queryParams: { name } })
  }

}
