import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DiscountsService } from '../../providers/discounts.service';
import { GeolocationService } from '../../providers/geolocation.service';

@Component({
  selector: 'app-discounts-map',
  templateUrl: './discounts-map.component.html',
  styleUrls: ['./discounts-map.component.css']
})
export class DiscountsMapComponent implements OnChanges {

  data: any;
  item: any;

  latitude: number;
  longitude: number;
  mapLink: any;

  @Input()
  discountId: number;

  constructor(private discountsService: DiscountsService, private geolocation: GeolocationService) { }

  ngOnChanges() {

    this.data = this.discountsService.GetDiscountFromFirebase(this.discountId);

       this.data.valueChanges().subscribe(res => {
          this.item = res;
          this.latitude = Number(res.latitude);
          this.longitude = Number(res.longitude);
          this.mapLink = this.geolocation.getMapLink(this.latitude, this.longitude);
        });
  }

}
