import { Component, Input } from '@angular/core';
// import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  // uso il @Decorator
  @Input() studentData?:any;
}
