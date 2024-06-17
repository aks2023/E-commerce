import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellarAddProductComponent } from './sellar-add-product.component';

describe('SellarAddProductComponent', () => {
  let component: SellarAddProductComponent;
  let fixture: ComponentFixture<SellarAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellarAddProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellarAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
