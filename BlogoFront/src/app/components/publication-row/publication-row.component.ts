import { PublicationService } from './../../services/publication/publication.service';
import { Component, OnInit, Input } from '@angular/core';
import Publication from 'src/app/models/Publication';

@Component({
  selector: 'app-publication-row',
  templateUrl: './publication-row.component.html',
  styleUrls: ['./publication-row.component.css']
})

export class PublicationRowComponent implements OnInit {

  @Input() publication: Publication;

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    console.log(this.publication)
  }

  OnRemoveCandidate(){
    let idPublication = this.publication.id;
    this.publicationService.deletePublication(idPublication).subscribe(response => {
        if (response){
            this.publicationService.error = null;
            this.publicationService.success = "Publication deleted";
        }
        else{
            this.publicationService.error = "Error during delete";
            this.publicationService.success = null;
        }
        setInterval(() => {
            this.publicationService.error = null;
            this.publicationService.success = null;
        }, 5000);
    });
    this.publicationService.deletePublication(idPublication);
}

}
