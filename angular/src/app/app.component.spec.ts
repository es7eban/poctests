import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ListPostComponent} from "./list-post/list-post.component";
import {FormPostComponent} from "./form-post/form-post.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListPostComponent,
        FormPostComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents()
      .then(()=>{
        fixture = TestBed.createComponent(AppComponent);
        component    = fixture.componentInstance;
      });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
      });
    
  }));

/*  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
