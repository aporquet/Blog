import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/services/publication/publication.service';
import Publication from 'src/app/models/Publication';

@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class NewPublicationComponent implements OnInit {

  publicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private publicationService: PublicationService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.initForm();
  }

  open(contentmodal: any) {
    this.modalService.open(contentmodal);
  }

  initForm() {
    this.publicationForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.min(2), Validators.max(25)]],
      content: ['', [Validators.required, Validators.min(10), Validators.max(500)]]
    });
  }

  onSubmitForm() {
    const formValue = this.publicationForm.value;
    const newPublication = new Publication(
      formValue['id'],
      formValue['title'],
      formValue['content']
    );
    this.publicationService.insertPublication(newPublication).subscribe(response => {
      if (response) {
        alert('success')
        this.modalService.dismissAll();
      } else {
        alert('echec')
        this.modalService.dismissAll();
      }
    });
  }

}
