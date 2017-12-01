import { Component, OnInit, Output } from '@angular/core';

import { ActivatedRoute,Router } from "@angular/router";
import { PostsService } from "../services/posts.service";

import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import { Post } from "../classes/post";

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
})
export class FormPostComponent implements OnInit {
  @Output()post: Post;
  idPost: string;

  constructor(private route: ActivatedRoute,
              private postsService:PostsService,
              private router: Router) {
    // console.log(listPost.data);
  }

  ngOnInit() {
    // Subscription to observable params
    this.route.params
      .subscribe(params => {
        this.idPost = params['id'].toString();

        this.postsService.getPostById(this.idPost)
          .subscribe(val => this.post = val);
      });
  }

  updatePost(form: NgForm) {
    console.log(JSON.stringify(form.value));
    this.postsService.updatePost(this.idPost,form.value)
      .subscribe(resp => this.router.navigate(['']));
  }
}