import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { SelectedRepoComponent } from './selected-repo/selected-repo.component';
import { InfoRepoComponent } from './info-repo/info-repo.component';
import { CommitComponent } from './commit/commit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    RepoComponent,
    PersonalCardComponent,
    SelectedRepoComponent,
    InfoRepoComponent,
    CommitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
