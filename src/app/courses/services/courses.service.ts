import { Injectable } from '@angular/core';
import { ICourse } from '../model/icourse';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ICourse[]>(this.API).pipe(
      first(), //taked only first response
      delay(1000),
      tap((courses) => console.log(courses)) // serves to process information
    );
  }

}
