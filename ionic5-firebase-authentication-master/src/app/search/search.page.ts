import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
searchedUsers =[];

  constructor() { }

  ngOnInit() {
  }
  search(evt) {
    var key: string = evt.target.value;
    var lowerCaseKey = key.toLowerCase();

    if (lowerCaseKey.length > 0) {
      firebase.database().ref("email").orderByChild("email").startAt(lowerCaseKey).endAt(lowerCaseKey + "\uf8ff").once("value", snapshot => {
          this.searchedUsers = [];
          snapshot.forEach(childSnap => {
            this.searchedUsers.push(childSnap.val());
          })
        })
    }
    else {
      this.searchedUsers = [];
    }
  }
}
