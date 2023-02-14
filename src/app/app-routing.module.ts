import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedContentComponent } from './components/feed-content/feed-content.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';


const routes: Routes = [
  {path: '', component: FeedContentComponent},
  {path: 'profile', component: ProfileContentComponent},
  {path: 'profile-edit', component: ProfileEditComponent},
  {path: 'group', component: GroupPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
