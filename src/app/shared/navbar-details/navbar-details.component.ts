import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-details',
  templateUrl: './navbar-details.component.html'
})
export class NavbarDetailsComponent implements OnInit {

  @Input()
  name: any;

  constructor(private _location: Location, private router: Router) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
    // this.router.navigate(['/discounts/', 'restaurants', '-LDBYEqpMe9otxOrdrNN']);
  }

}
