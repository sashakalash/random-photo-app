import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotoListComponent } from './favorite-photo-list.component';

describe('FavoritePhotoListComponent', () => {
  let component: FavoritePhotoListComponent;
  let fixture: ComponentFixture<FavoritePhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePhotoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
