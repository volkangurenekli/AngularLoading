import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from './../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private sub: any;
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPosts() {
    this.sub = this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.slice(0, 10);
    });
  }
}
