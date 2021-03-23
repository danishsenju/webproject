import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bab1',
  templateUrl: './bab1.page.html',
  styleUrls: ['./bab1.page.scss'],
})
export class Bab1Page implements OnInit {

  constructor() { }
 toggleTheme(event){
   console.log(event);

 }
  ngOnInit() {
  }

}
