import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiginupPage } from './siginup.page';

describe('SiginupPage', () => {
  let component: SiginupPage;
  let fixture: ComponentFixture<SiginupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SiginupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
