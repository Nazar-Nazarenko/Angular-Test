import {Component, Input, OnInit} from '@angular/core';
import { UserInterface} from '../user-interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @Input() card: UserInterface | any;
  constructor() { }

  ngOnInit(): void {
  }

}
