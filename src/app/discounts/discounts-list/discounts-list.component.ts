import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DiscountsService } from '../../providers/discounts.service';
import { Disount } from '../../models/discount';
import { GeolocationService } from '../../providers/geolocation.service';
import { DiscountsDetailsComponent } from '../discounts-details/discounts-details.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-discounts-list',
  templateUrl: './discounts-list.component.html'
})
export class DiscountsListComponent implements OnInit, OnChanges {

  @Input()
  category: any;

  @Input()
  searchBy: string;

  discount: Disount[] = [];
  data: Disount[] = [];
  filteredData: Disount[];
  isTracking: boolean;
  coors: any;
  distance: any;
  data2: any;
  goto = '-LDBYEqpMe9otxOrdrNN';

  constructor(private discountsService: DiscountsService, private geolocation: GeolocationService, public dialog: MatDialog) {
    // this.trackMe();
  }

  ngOnInit() {
    /* this.discountsService.loadDiscountsFromFireBaseByCat(this.category).subscribe(data => {
      data.forEach(e => {
        if (e.actived === 'Enabled') {
            this.data.push(e);
          }
      });
      this.filteredData = this.data;
    }); */


    this.data2 = this.discountsService.loadDiscountsFromFireBaseByCat(this.category);
    this.data2.subscribe(res => {
      this.filteredData = [];
      this.data = [];
      res.forEach(e => {
        if (e.actived === 'Enabled') {
            this.data.push(e);
          }
      });
      this.filteredData = this.data;
    });
  }

  viewDetails(item) {
    const dialogRef = this.dialog.open(DiscountsDetailsComponent, {
      width: '1200px',
      height: '770px',
      data: { discount: item }
    });

    dialogRef.afterClosed().subscribe(result => {

      // console.log(result);
      if (result !== undefined) {

      }
    });
  }

  ngOnChanges() {

    if (this.searchBy !== undefined) {
      this.searchT(this.searchBy);
    }

    // this.ngOnInit();
  }

  searchT(search: string) {
    this.filteredData = this.data.filter(data => data.name.toLowerCase().includes(search.toLowerCase())
    || data.description.toLowerCase().includes(search.toLowerCase()));
    // this.filteredData = this.data.filter(data => console.log(data.title));
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        this.coors = position;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        // console.log(position);
      this.coors = position;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }


  getDistance(c, d) {

    /* console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); */
    // this.distance = this.geolocation.distance(a, b, c, d, 'K');


      return this.geolocation.distance(c, d, 'K');

    // return this.geolocation.calculateDistance(a, b, c, d);
    // return this.geolocation.calculateDistance2(a, b, c, d);
  }

}
