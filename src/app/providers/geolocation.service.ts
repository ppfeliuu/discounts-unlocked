import { Injectable } from '@angular/core';
// import { error } from 'selenium-webdriver';
// import { } from '@types/googlemaps';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';

declare var google: any;

@Injectable()
export class GeolocationService {

  myLocation: any;
  constructor() {
    this.requestLocation();
  }

  requestLocation() {
    navigator.geolocation.watchPosition(
      position => {
        // console.log(position.coords);
        // this.myLocation = new TrackLocation(null, position.coords.latitude, position.coords.longitude);
        this.myLocation = position.coords;
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.log(error.message);
      }
    );
  }

  getMapLink(latitude, longitude) {
    // Universal Link
    const q = latitude + ',' + longitude;

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${q}`;
    } else {
      return `https://maps.google.com/?q=${q}`;
    }
  }

  distance(lat2, lon2, unit) {
    // const radlat1 = Math.PI * lat1 / 180;
    const radlat1 = Math.PI * this.myLocation.latitude / 180;
    const radlat2 = Math.PI * lat2 / 180;
    // const theta = lon1 - lon2;
    const theta = this.myLocation.longitude - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') { dist = dist * 1.609344; }
    // if (unit === 'N') { dist = dist * 0.8684; }
    return dist;
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const nyc = new google.maps.LatLng(lat1, lon1);
    const london = new google.maps.LatLng(lat2, lon2);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(nyc, london);

    return distance;
  }
}
