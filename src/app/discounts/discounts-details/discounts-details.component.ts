import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountsService } from '../../providers/discounts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-discounts-details',
  templateUrl: './discounts-details.component.html'
})
export class DiscountsDetailsComponent implements OnInit {

  // discountId: any;
  item: any;
  data: any;

  /* constructor(private discountsService: DiscountsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {  this.discountId = params.id;
   });

  } */

  constructor(public dialogRef: MatDialogRef<DiscountsDetailsComponent>, private discountsService: DiscountsService,
    @Inject(MAT_DIALOG_DATA) public discount: any) { }

  ngOnInit() {

    this.data = this.discountsService.GetDiscountFromFirebase(this.discount.discount);

    this.data.valueChanges().subscribe(res => { this.item = res;
    // console.log(res);
      }
    );
  }

  backClicked() {
    this.dialogRef.close();
  }
}
