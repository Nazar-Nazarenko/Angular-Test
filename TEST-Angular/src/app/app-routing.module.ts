import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { SelectedRepoComponent } from './selected-repo/selected-repo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/:id',
    component: PersonalCardComponent
  },
  {
    path: 'repo/:userName/:repoName',
    component: SelectedRepoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
