import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  let fixture: AppComponent;

  // USE npm run test:watch!!!
  // USE npm run test:coverage!!!
  // For running only specific test file ex: npm run test fake.service.spec.ts
  // https://www.youtube.com/watch?v=CnnVSerJh8I&list=PLZeQR2FcsS5TP95tP4AqUXSiGiNQZHckM
  beforeEach(() => {
    fixture = new AppComponent;
    // component = fixture.componentInstance;
  })

  it(`should have title of 'jest-basics'`, () => {
    expect(fixture.title).toEqual('jest-basics');
  })

  it(`adds 1 + 2 to equal 3`, () => {
    expect(fixture.sum(1,2)).toBe(3);
  })

  it(`should return user object with id property of 'mark-1'`, () => {
    expect(fixture.userIdAssign('mark',1).id).toEqual('mark-1');
  })


  });



  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'jest-practice'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('jest-practice');
  // });


  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('jest-practice app is running!');
  // });
