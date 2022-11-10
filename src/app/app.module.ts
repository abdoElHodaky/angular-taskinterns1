import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../news/news.component';
import { NewsDetailComponent } from '../newsdetail/newsdetail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
        /*children: [
          {
            path: "anew",
            component: ANewComponent
          }
        ]*/
        //children: [{ path: "/", component: ANewComponent }]
      },
      { path: 'news/:id', component: NewsDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}