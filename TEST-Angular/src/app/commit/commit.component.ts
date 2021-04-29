import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  @Input() commit: any;
  constructor() { }

  ngOnInit(): void {
  }

}
