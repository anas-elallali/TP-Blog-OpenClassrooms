import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service'
import { Post } from '../models/post.model'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() post: Post;
  @Input() indexItem: number;
  constructor(private postService: PostService) {}


  onLoveIt(post: Post, index: number) {
    this.postService.lovePost(post,index);
  }

  onDoNotLoveIt(post: Post, index: number) {
    this.postService.doNotLovePost(post,index);
  }

  onDelete(index: number) {
    this.postService.removePost(index);
  }


}
