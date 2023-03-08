import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHook';

  inputText:string = '';
  OnSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }
}
