import { Post } from './../models/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService) {}

  posts: Post[];
  postSubscription: Subscription;

  ngOnInit() {
    
    this.postSubscription = this.postService.postsSubject.subscribe(
      (postsArray: Post[]) => {
        this.posts = postsArray;
      }
    );
    this.postService.loadPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
