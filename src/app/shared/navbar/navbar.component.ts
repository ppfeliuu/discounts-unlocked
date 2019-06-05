import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mId: any;
  message;
  // VAPID_PUBLIC_KEY = 'BL8nzYsUS0fH1-wsd2wqekuMpx0rP3xY8aPzy1uTz4nIj4EvwsQ-kAmxxMVxEucjFm2Kx9CkFUBUjbKmV3e2pMU';
  VAPID_PUBLIC_KEY = 'BNtpa44W0_zNSbOt28eqyvhQylycthvtyW2MA5xLwxXJc9kCe2iMCDm-bilhzhjNSgqxgPFa_AlfW1WrL0IKYPw';

  /* constructor(private authService: AuthService, private swPush: SwPush, private _fcmPushService: FcmPushService) { } */
  constructor() { }

  ngOnInit() {
    this.mId = localStorage.getItem('kid');

  }

  /* subscribeMsg() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      console.log('Notification Subscription: ', sub);
    })
    .catch(err => console.log('Could not subscribe to notification', err));
    // this.swPush.unsubscribe();
  }

  unSubscribeMsg() {

    this.swPush.unsubscribe()
    .then();
  }

  subscribe() {
    this._fcmPushService.getPermission();
    this._fcmPushService.receiveMessage();
    this._fcmPushService.currentMessage.subscribe(message => console.log(message));
  } */

  logout() {
    this.mId = null;
    localStorage.setItem('kid', undefined);
    localStorage.removeItem('kid');

  }

}
