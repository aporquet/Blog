import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Blog';
  private url = environment.url;
  
  constructor(private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.firstCall();
  }

  firstCall() {
    this.httpClient.get(this.url+'publications');
  }

}
