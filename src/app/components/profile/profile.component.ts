import { Component } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
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
