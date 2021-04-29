import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalCardService {
  user: any;
  constructor(private http: HttpClient) { }
  public getUser(userName: string): any {
    this.http.get('https://api.github.com/users/' + userName).subscribe((response: any) => {
      this.user = response;
      const reposUrl: string = response.repos_url;
      this.http.get(reposUrl).subscribe((repos) => {
        this.user.repos = repos;
      });
      console.log('USER INFO:', this.user);
    });
  }
}
