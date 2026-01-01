import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainObservable } from './chain-observable';

describe('ChainObservable', () => {
  let component: ChainObservable;
  let fixture: ComponentFixture<ChainObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
