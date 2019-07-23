import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationRowComponent } from './publication-row.component';

describe('PublicationRowComponent', () => {
  let component: PublicationRowComponent;
  let fixture: ComponentFixture<PublicationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
