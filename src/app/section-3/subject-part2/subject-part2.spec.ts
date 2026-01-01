import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPart2 } from './subject-part2';

describe('SubjectPart2', () => {
  let component: SubjectPart2;
  let fixture: ComponentFixture<SubjectPart2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectPart2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectPart2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
