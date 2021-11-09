import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getPosts(): Observable<Post[]> {
    this.loadingService.setLoading(true);
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(delay(2000))
      .pipe(
        finalize(() => {
          this.loadingService.setLoading(false);
        })
      );
  }
}
