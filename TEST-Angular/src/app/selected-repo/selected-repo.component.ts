import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {RepositoryService} from '../repository.service';
import {UserInterface} from '../user-interface';

@Component({
  selector: 'app-selected-repo',
  templateUrl: './selected-repo.component.html',
  styleUrls: ['./selected-repo.component.scss']
})
export class SelectedRepoComponent implements OnInit {
  public  userName: UserInterface | any;
  public  repoName: UserInterface | any;
  public commit = false;
  constructor(private activateRoute: ActivatedRoute, public repoService: RepositoryService) {
    this.userName = activateRoute.snapshot.params['userName'];
    this.repoName = activateRoute.snapshot.params['repoName'];
    console.log('USERname',this.userName, 'REPOname', this.repoName);
    repoService.getRepo(this.userName, this.repoName);
  }

  ngOnInit(): void {
  }
  showCommits(): any {
    this.commit = !this.commit;
    console.log('COMMITS ARE SHOWN!');
  }

}
