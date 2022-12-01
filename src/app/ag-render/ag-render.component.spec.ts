import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRenderComponent } from './ag-render.component';

describe('AgRenderComponent', () => {
  let component: AgRenderComponent;
  let fixture: ComponentFixture<AgRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
