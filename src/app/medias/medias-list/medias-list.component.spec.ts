import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasListComponent } from './medias-list.component';

describe('MediasListComponent', () => {
  let component: MediasListComponent;
  let fixture: ComponentFixture<MediasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
