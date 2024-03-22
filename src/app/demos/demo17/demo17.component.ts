import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrl: './demo17.component.scss'
})
export class Demo17Component implements OnInit, DoCheck {

  user!: User | null;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngDoCheck(): void {
    this.user = this._activatedRoute.snapshot.data['user'];
  }

  ngOnInit(): void {
    
  }

}
