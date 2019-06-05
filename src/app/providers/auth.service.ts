import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  user: any;

  currentUser(): any {
    return (this.user !== null) ? this.user : null;
  }


  isMember(id: any) {
    const url = 'https://webservices.keys-concierge.com/KeysTools/Get/MemberCheckPWA.aspx?keys_id=' + id;
    return this.http.get(url).pipe(
      map(res => res.json())
    );
  }

  isUserEmailLoggedIn(): boolean {
    // console.log(this.user);
    if (this.user !== null || this.user !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
