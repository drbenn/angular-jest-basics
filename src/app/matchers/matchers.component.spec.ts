import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact Equality
  it('2 + 2 is 4', () => {
    expect(2+2).toBe(4);
  });

  //For testing Object Values
  it('Object values', () => {
    const data = {name: "SomeData"};
    expect(data).toEqual({name: "SomeData"});
  });

  //Truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // Numbers
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); // this wont work because of rounding error
    expect(value).toBeCloseTo(0.3); // this works
  })

  // Strings
  it('there is no J in Dan', () => {
    expect('Dan').not.toMatch(/J/);
  });

  it('but there is "an" in Dan', () => {
    expect('Dan').toMatch(/an/);
  });

  // Arrays and iterables
  it('the list has milk in it', () => {
    const list = [
      "eggs",
      "chicken",
      "taco",
      "milk",
      "salmon"
    ];
    expect(list).toContain('milk');
    expect(new Set(list)).toContain('milk');
  });

  // Exceptions
  it('compiling android goes as expected', () => {
    expect(() => component.compileAndroidCode()).toThrow();
    expect(() => component.compileAndroidCode()).toThrow(Error);

    // you can also use the exact error message or a regex
    expect(() => component.compileAndroidCode()).toThrow('you are using Old Angular');
    expect(() => component.compileAndroidCode()).toThrow(/Angular/);

  })
  


});
