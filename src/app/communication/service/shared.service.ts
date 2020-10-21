import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  parentSays: string;

  childSays: string;
  
  constructor() { }

  setWordsFromParent(says: string) {
    this.parentSays = says;
  }
  getWordsFromParent() {
    return this.parentSays;
  }

  setWordsFromChild(says: string) {
    this.childSays = says;
  }
  getWordsFromChild() {
    return this.childSays;
  }
}
