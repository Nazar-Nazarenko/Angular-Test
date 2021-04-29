import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRepoComponent } from './selected-repo.component';

describe('SelectedRepoComponent', () => {
  let component: SelectedRepoComponent;
  let fixture: ComponentFixture<SelectedRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
