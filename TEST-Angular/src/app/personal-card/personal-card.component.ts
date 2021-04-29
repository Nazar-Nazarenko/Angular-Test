import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonalCardService} from '../home/personal-card.service';
import { UserInterface} from '../user-interface';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss']
})
export class PersonalCardComponent implements OnInit {
  public id: UserInterface | any;
  constructor(private activateRoute: ActivatedRoute, public cardService: PersonalCardService) {
    this.id = activateRoute.snapshot.params['id'];
    cardService.getUser(this.id);
  }

  ngOnInit(): void {
  }

}
