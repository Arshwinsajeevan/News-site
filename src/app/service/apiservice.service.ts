import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=81891d72ef6a418d89ba26cc729d0dc1"

  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81891d72ef6a418d89ba26cc729d0dc1"

  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=81891d72ef6a418d89ba26cc729d0dc1"

  topheading(){
    return this.http.get(this.newsApiUrl)
  }

  techNews(){
    return this.http.get(this.techApiUrl)
  }

  sportsNews(){
    return this.http.get(this.sportsApiUrl)
  }
}
