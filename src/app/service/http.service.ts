import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVING_MODE: string = "local";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMenuList() {
    let apiUrl = "menuList.json";

    if (this.isRemote) {
      apiUrl = "query/menubar/list"
    }

    let url = this.baseUrl + apiUrl;
    return this.http.get(url);
  }

  get baseUrl() {
    if (SERVING_MODE == "REMOTE") {
      return "http://localhost:8080/";
    }
    else
      return "assets/mockData/";
  }

  get isRemote() {
    if (SERVING_MODE == "REMOTE") {
      return true;
    }
    else
      return false;
  }
}
