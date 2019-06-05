import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html'
})
export class DiscountsComponent  {

  category: any = 'Category';

  @Input()
  searchBy: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe(params => { this.category = params.cat;
        });
  }

  searchDiscount(s) {

    this.searchBy = s;
  }

}
