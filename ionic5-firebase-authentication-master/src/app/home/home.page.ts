import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public searchList: any[];
  public loadedsearchList: any[];

  constructor(private firestore:AngularFirestore) { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
  ngOnInit(){
  }
}
