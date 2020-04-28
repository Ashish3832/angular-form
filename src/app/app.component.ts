import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  topics=['Angular','React','Vue'];
  topicHasError=true;

  userModel=new User('Roy' , 'roy1234@gmail.com' , 9897654352, 'default' ,'morning' , true);


  validateTopic(value)
  {
    if(value === 'default')
      {
        this.topicHasError=true;
      }
    else{
      this.topicHasError=false;
    }
  }

  
}
