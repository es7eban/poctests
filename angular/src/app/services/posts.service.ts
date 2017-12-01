import { Injectable } from '@angular/core';

import { Post } from "../classes/post";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class PostsService {
  private apiUrl = 'http://poctests.local/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]>{
    return this.http.get(this.apiUrl)
      .map((response: Response) => response.json());
  }

  getPostById(id:string): Observable<Post>{
    return this.http.get(this.apiUrl+'/edit/'+id)
      .map((response: Response) => response.json());
  }

  updatePost(id:string, body:string):Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiUrl+'/update/'+id,body,{headers:headers})
      .map((response: Response) => response.json());
  }

  deletePost(id: string):Observable<any> {
    return this.http.get(this.apiUrl+'/delete/'+id)
      .map((response: Response) => response.json());
  }
}
