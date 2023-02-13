import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedContentComponent } from './components/feed-content/feed-content.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { PublicationComponent } from './components/publication/publication.component';


const routes: Routes = [
  {path: '', component: FeedContentComponent},
  {path: 'profile', component: ProfileContentComponent},
  {path: 'publications', component: PublicationComponent},
  {path: 'profile-edit', component: ProfileEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
