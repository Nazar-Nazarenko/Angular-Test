import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repo: any;
  constructor(private http: HttpClient) { }
  public getRepo(userName: string, repoName: string): any {
    this.http.get(`https://api.github.com/repos/${userName}/${repoName}`)
      .subscribe((response: any) => {
      this.repo = response;
      this.http.get(`https://api.github.com/repos/${userName}/${repoName}/branches`).subscribe((branches) => {
        this.repo.branches = branches;
      });
      this.http.get(`https://api.github.com/repos/${userName}/${repoName}/commits`).subscribe((commits) => {
        this.repo.commits = commits;
      });
      console.log('REPOSITORY INFO:', this.repo);
    });
  }
}
