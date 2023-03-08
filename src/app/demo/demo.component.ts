import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, AfterContentInit, AfterContentChecked,} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

 @Input() value:string = 'procademy';

 constructor(){
  console.log('Constructor Called!');
 }

 ngOnChanges(change: SimpleChanges){
  console.log('ngOnChange Called');
  
 }

 ngOnInit(){
  console.log('ngOnInit Called');
  
 }

 ngDoCheck(){
  console.log('ngDoCheck Called!');
 }
 ngAfterContentInit(){
  console.log('ngAfterContetntInit Called');
 }
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked Called');
  
 }

}
