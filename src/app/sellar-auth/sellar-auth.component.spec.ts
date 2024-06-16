import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarAuthComponent } from './sellar-auth.component';

describe('SellarAuthComponent', () => {
  let component: SellarAuthComponent;
  let fixture: ComponentFixture<SellarAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellarAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellarAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
