import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbleTableDirectionComponent } from './sortble-table-direction.component';

describe('SortbleTableDirectionComponent', () => {
  let component: SortbleTableDirectionComponent;
  let fixture: ComponentFixture<SortbleTableDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortbleTableDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbleTableDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
