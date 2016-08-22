import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'ed4befb17bc18f766961';
  private client_secret = '518775baf6fd4751e6d60a4516265292d7b028ff';

  constructor(private _http: Http) { }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }
}
