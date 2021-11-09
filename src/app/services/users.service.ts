import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  getUsers(): Observable<User[]> {
    this.loadingService.setLoading(true);
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(delay(2000))
      .pipe(
        finalize(() => {
          this.loadingService.setLoading(false);
        })
      );
  }
}
