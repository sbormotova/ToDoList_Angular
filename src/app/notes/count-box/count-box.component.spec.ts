import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBoxComponent } from './count-box.component';

describe('CountBoxComponent', () => {
  let component: CountBoxComponent;
  let fixture: ComponentFixture<CountBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountBoxComponent]
    });
    fixture = TestBed.createComponent(CountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
