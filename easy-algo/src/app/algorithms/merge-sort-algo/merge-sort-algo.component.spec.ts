import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSortAlgoComponent } from './merge-sort-algo.component';

describe('MergeSortAlgoComponent', () => {
  let component: MergeSortAlgoComponent;
  let fixture: ComponentFixture<MergeSortAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeSortAlgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeSortAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
