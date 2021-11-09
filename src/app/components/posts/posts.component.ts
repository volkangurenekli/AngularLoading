import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from './../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private postsService: PostsService) {}
  posts: Post[] = [];

  getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.slice(0, 10);
    });
  }
}
