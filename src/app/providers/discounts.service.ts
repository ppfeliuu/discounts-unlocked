import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
// import { Disount } from '../models/discount';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class DiscountsService {

  discountsData: any;
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;

  constructor(private http: Http, private db: AngularFireDatabase) { }


  loadDiscountsData() {
    /* return this.http.get(
      'http://content.silverpoint.com/api/get_page/?slug=root/discounts-app/&children=true&validdomain=com.silverpoint.psp')
      .map(res =>  this.discountsData = res.json()); */
  }

  loadDiscountsDataB(category: any) {
    /* let topics = '';
    if (category === 'shopping') {
      topics = 'others-discounts';
    } else {
      topics = category;
    }
    return this.http.get(
      'http://content.silverpoint.com/api/get_page/?slug=root/discounts-app/' + topics + '&children=true&validdomain=com.silverpoint.psp')
      .map(res =>  this.discountsData = res.json()); */
  }

  loadDiscountsFromFireBase() {

    this.itemsRef = this.db.list('Discounts');

     this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => {
       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
     }));

     return this.items;
   }

  loadDiscountsFromFireBaseByCat(category: string) {

  if (category === 'restaurants') {
    category = 'Restaurants';
  } else if (category === 'shopping') {
    category = 'Shopping';
  }

  this.itemsRef = this.db.list('Discounts/', ref => ref.orderByChild('section').equalTo(category));
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));

    return this.items;
  }

  GetDiscountFromFirebase(discountId: any) {

    return this.db.object('Discounts/' + discountId );

  }

  GetDiscount(discountId: any) {

  }

  searchDiscount(text: string) {
    const du = this.discountsData.page.children;
    const d = du.find(x => x.title === text);
    return d;
  }
}
