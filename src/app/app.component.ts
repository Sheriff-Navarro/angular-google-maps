import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 27.678418;
  lng: number = -81.809007;
}
