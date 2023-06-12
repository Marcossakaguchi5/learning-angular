import { Component } from '@angular/core';
import { ICourse } from '../model/icourse';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
// import { SweetAlertComponent } from 'src/app/shared/components/sweet-alert/sweet-alert.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  // "$" this annotation represent Observable
  courses$: Observable<ICourse[]>;
  constructor(
    private courseService: CoursesService,
    // private sweetAlert:SweetAlertComponent
    ) {
    this.courses$ = this.courseService.list().pipe(
      catchError(error=>{
        return of([])
      })
    );
  }

  ngOnInit(): void {

  }
  tinyAlert(){
    alert('ERRO AO CARREGAR')
    // this.sweetAlert.tinyAlert()
  }


}
