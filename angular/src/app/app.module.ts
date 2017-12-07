import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormPostComponent } from './form-post/form-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import {PostsService} from './services/posts.service';

const routes: Routes = [
  {path: 'edit/:id', component: FormPostComponent},
  {path: '', component: ListPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormPostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppComponent, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err: any) => console.error(err));
