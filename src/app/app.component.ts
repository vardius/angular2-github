import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [NavbarComponent, ProfileComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent { }
