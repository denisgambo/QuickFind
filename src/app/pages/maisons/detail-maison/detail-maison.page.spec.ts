import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailMaisonPage } from './detail-maison.page';

describe('DetailMaisonPage', () => {
  let component: DetailMaisonPage;
  let fixture: ComponentFixture<DetailMaisonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailMaisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
