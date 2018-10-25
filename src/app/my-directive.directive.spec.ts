import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MyDirective} from './my-directive.directive';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `<span customDir="dir_val" id="test"></span>`
})
class TestComponent {
}

fdescribe('Directive: My Directive', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, MyDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('#test'));
    console.log(inputEl.nativeElement);
  });
});
