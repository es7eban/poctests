import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostComponent } from './list-post.component';

describe('ListPostComponent', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create list posts', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  }));
});
