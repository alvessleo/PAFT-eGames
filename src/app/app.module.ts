import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FeedContentComponent } from './pages/feed-content/feed-content.component';
import { StoryUserComponent } from './components/story-user/story-user.component';
import { PublicationComponent } from './components/publication/publication.component';
import { CommentComponent } from './components/comment/comment.component';
import { ItemSuggestComponent } from './components/item-suggest/item-suggest.component';
import { ProfileContentComponent } from './pages/profile-content/profile-content.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsProfileComponent } from './components/tabs-profile/tabs-profile.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemGroupComponent } from './components/item-group/item-group.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { TabsGroupComponent } from './components/tabs-group/tabs-group.component';
import {MatMenuModule} from '@angular/material/menu';
import { UserMenuNavComponent } from './components/user-menu-nav/user-menu-nav.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { GroupCreatePageComponent } from './pages/group-create-page/group-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GridHomeComponent } from './components/grid-home/grid-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoticiasApiPageComponent } from './pages/noticias-api-page/noticias-api-page.component';
import { PopularItemApiComponent } from './components/popular-item-api/popular-item-api.component';
import { NewestItemApiComponent } from './components/newest-item-api/newest-item-api.component';
import { SoonItemApiComponent } from './components/soon-item-api/soon-item-api.component';
import { AnticipatedItemApiComponent } from './components/anticipated-item-api/anticipated-item-api.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FeedContentComponent,
    StoryUserComponent,
    PublicationComponent,
    CommentComponent,
    ItemSuggestComponent,
    ProfileContentComponent,
    TabsProfileComponent,
    ProfileEditComponent,
    ItemGroupComponent,
    GroupPageComponent,
    TabsGroupComponent,
    UserMenuNavComponent,
    LoginPageComponent,
    CadastroPageComponent,
    GroupCreatePageComponent,
    NavHomeComponent,
    HomePageComponent,
    GridHomeComponent,
    NoticiasApiPageComponent,
    PopularItemApiComponent,
    NewestItemApiComponent,
    SoonItemApiComponent,
    AnticipatedItemApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
