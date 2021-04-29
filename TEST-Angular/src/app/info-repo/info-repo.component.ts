import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-repo',
  templateUrl: './info-repo.component.html',
  styleUrls: ['./info-repo.component.scss']
})
export class InfoRepoComponent implements OnInit {
  @Input() repository: any;
  constructor() { }

  ngOnInit(): void {
  }

}
