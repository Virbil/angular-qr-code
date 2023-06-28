import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myAngularxQrCode: string;

  constructor () {
    this.myAngularxQrCode = 'https://github.com/Virbil/angular-qr-code';
  }
}
