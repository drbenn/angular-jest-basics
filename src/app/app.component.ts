import { Component } from '@angular/core';
import { UserObject } from './shared/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jest-basics';

  sum(a:number, b:number) {
    return a +b;
  }

  userIdAssign(_name:string, _age:number):UserObject {
    const updatedUser:UserObject = {
      name: _name,
      age: _age,
      id: _name + '-' + String(_age)
    } 
    return updatedUser;
  }
}
