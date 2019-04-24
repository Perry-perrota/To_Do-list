import { Component } from '@angular/core';
import { chore } from './lists'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chores =[
    new chore(1,'Feed the baby'),
    new chore(2,'Wash the baby'),
    new chore(3,'Walk the baby'),

  ]
}
