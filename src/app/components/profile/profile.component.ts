import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  directives: [FORM_DIRECTIVES],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class ProfileComponent {
  user = [];
  repos = [];
  username: string;

  constructor(private _githubService: GithubService) { }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
