import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserInterface} from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cards: UserInterface | any;

  constructor(private http: HttpClient) {}
  public getUsers(): any {
    console.log('get button works');
    this.http.get('https://api.github.com/users').subscribe((response) => {
      this.cards = response;
      console.log('GENERAL INFO:', this.cards);
    });
  }
}
