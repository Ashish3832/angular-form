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

  userModel=new User('ashish' , 'akumar6399@gmail.com' , 7351619673, 'default' ,'morning' , true);


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
