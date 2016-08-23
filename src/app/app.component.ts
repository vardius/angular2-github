import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [NavbarComponent, ProfileComponent]
})
export class AppComponent { }
