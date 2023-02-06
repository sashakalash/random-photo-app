import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotoComponent } from './favorite-photo.component';

describe('FavoritePhotoComponent', () => {
  let component: FavoritePhotoComponent;
  let fixture: ComponentFixture<FavoritePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
