import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../user-interface';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() repoPersonal: UserInterface | any;
  constructor() { }

  ngOnInit(): void {
  }

}
