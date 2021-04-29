import { Component, OnInit, Input } from '@angular/core';
import { UserInterface} from '../user-interface';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  @Input() commit: UserInterface | any;
  constructor() { }

  ngOnInit(): void {
  }

}
