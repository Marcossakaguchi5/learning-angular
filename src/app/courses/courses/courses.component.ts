import { Component } from '@angular/core';
import { ICourse } from '../model/icourse';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  // "$" this annotation represent Observable
  courses$: Observable<ICourse[]>;
  constructor(private courseService: CoursesService) {
    this.courses$ = this.courseService.list();
  }

  ngOnInit(): void {}
}
