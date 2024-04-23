import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilleComponent } from './edit-famille.component';

describe('EditFamilleComponent', () => {
  let component: EditFamilleComponent;
  let fixture: ComponentFixture<EditFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFamilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
