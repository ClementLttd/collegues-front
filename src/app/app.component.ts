import { Component } from '@angular/core';
import {collegueMock} from 'src/app/mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  unObjetCollegueFourni = collegueMock;
}
