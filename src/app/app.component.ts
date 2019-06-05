import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate, public dialog: MatDialog) { }
  /* constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { } */

  updateNetworkStatusUI() {
    if (navigator.onLine) {
      // You might be online
      (document.querySelector('body') as any).style = '';
    } else {
      // 100% Sure you are offline
      (document.querySelector('body') as any).style = 'filter: grayscale(1)';
    }
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
          width: '250px',
          data: { confirm: 'yes', noConfirm: 'no' }
        });

        dialogRef.afterClosed().subscribe(result => {
          // console.log(result);
          if (result === 'yes') {
            window.location.reload();
          }
        });
      });
    }

    this.updateNetworkStatusUI();
    window.addEventListener('online', this.updateNetworkStatusUI);
    window.addEventListener('offline', this.updateNetworkStatusUI);

    if ((navigator as any).standalone === false) {
      // This is an iOS device and we are in the browser

        // We are in the browser

          // event.preventDefault();
         /*  const sb = this.snackBar.open('Do you want to install Discount Unlocked?', 'Install', { duration: 15000 });
          sb.onAction().subscribe(() => {
            (event as any).prompt();
            (event as any).userChoice.then(result => {
              if (result.outcome === 'dismissed') {
                // TODO: track no installation
              } else {
                // TODO: It was installed
              }
            });
          }); */
          // return false;
    }

    if ((navigator as any).standalone === undefined) {
      // It's not iOS
      if (window.matchMedia('(display-mode: browser').matches) {
        // We are in the browser
        window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          const sb = this.snackBar.open('Do you want to install Discount Unlocked?', 'Install', { duration: 15000 });
          sb.onAction().subscribe(() => {
            (event as any).prompt();
            (event as any).userChoice.then(result => {
              if (result.outcome === 'dismissed') {
                // TODO: track no installation
              } else {
                // TODO: It was installed
              }
            });
          });
          return false;
        });
      }
    }
  }
}


@Component({
  selector: 'app-dialog-reload',
  templateUrl: './shared/dialog-reload/dialog-reload.component.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
