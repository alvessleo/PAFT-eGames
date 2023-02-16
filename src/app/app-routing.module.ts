import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { FeedContentComponent } from './pages/feed-content/feed-content.component';
import { GroupCreatePageComponent } from './pages/group-create-page/group-create-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfileContentComponent } from './pages/profile-content/profile-content.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'feed', component: FeedContentComponent},
  {path: 'profile', component: ProfileContentComponent},
  {path: 'profile-edit', component: ProfileEditComponent},
  {path: 'group', component: GroupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'cadastro', component: CadastroPageComponent},
  {path: 'new-group', component: GroupCreatePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
