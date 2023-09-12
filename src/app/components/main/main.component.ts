import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  mockData: Student[] = [
{
      name: 'Damiano',
      surname: 'Di Lionardo',
      age: 30,
      imageUrl: ''
    },
    {
      name: 'Manuela',
      surname: 'Ariotti',
      age: 35,
      imageUrl: ''
    },
    {
      name: 'Cesare',
      surname: 'Falzone',
      age: 20,
      imageUrl: ''
    },
    {
      name: 'Luca',
      surname: 'Verduci',
      age: 24,
      imageUrl: ''
    },
    {
      name: 'Stefano',
      surname: 'Florio',
      age: 25,
      imageUrl: ''
    },
    {
      name: 'Bryan',
      surname: 'Rojas',
      age: 28,
      imageUrl: ''
    },
    {
      name: 'Ares',
      surname: 'Fiumicelli',
      age: 30,
      imageUrl: ''
    },
    {
      name: 'Francesca',
      surname: 'Ercolani',
      age: 34,
      imageUrl: ''
    },
    {
      name: 'Isabella',
      surname: 'Ottonello',
      age: 27,
      imageUrl: ''
    },
    {
      name: 'Stefania',
      surname: 'Ghergut',
      age: 27,
      imageUrl: ''
    }
  ];

}
