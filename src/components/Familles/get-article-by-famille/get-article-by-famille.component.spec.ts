import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArticleByFamilleComponent } from './get-article-by-famille.component';

describe('GetArticleByFamilleComponent', () => {
  let component: GetArticleByFamilleComponent;
  let fixture: ComponentFixture<GetArticleByFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetArticleByFamilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetArticleByFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
