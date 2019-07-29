import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './services/api.service';
import { environment } from 'src/environments/environment';
import Publication from './models/Publication';
import { PublicationService } from './services/publication/publication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Blog';
  private url = environment.url;
  
  constructor(private publicationService: PublicationService, private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(){
    this.publicationService.getPublications().subscribe((response: Publication[]) => {
        this.publicationService.publications = response;
    });
}

}
