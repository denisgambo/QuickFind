import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMaisonsPage } from './list-maisons.page';

describe('ListMaisonsPage', () => {
  let component: ListMaisonsPage;
  let fixture: ComponentFixture<ListMaisonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMaisonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
