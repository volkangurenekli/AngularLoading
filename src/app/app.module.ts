import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PostsComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
