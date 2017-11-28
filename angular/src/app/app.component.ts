import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poc test';
  private apiUrl = 'http://poctests.local/posts';
  data: any = [];

  constructor(private http: Http) {
    console.log('hello...');
    this.getPosts();
    this.getData();
  }

  getData(param: string = ''){
    return this.http.get(this.apiUrl+param)
        .map((res: Response) => res.json())
  }

  getPosts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  deletePost(postId: string) {
    this.getData('/delete/'+postId)
      .subscribe(data => {
        console.log(data);
        this.getPosts();
      });
  }

  editPost(postId: string) {
    this.getData('/edit/'+postId)
      .subscribe(data => {
        console.log(data);

      });
  }
}
