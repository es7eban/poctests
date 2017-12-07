import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { PostsService } from '../services/posts.service';
import { Post } from '../classes/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  title = 'List Posts';
  posts: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    console.log('load list');
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
  deletePost(id: string) {
    this.postsService.deletePost(id)
      .subscribe((val) => this.posts = this.postsService.getPosts());
  }
}
