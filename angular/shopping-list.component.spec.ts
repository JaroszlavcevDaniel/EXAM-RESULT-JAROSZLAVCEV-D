import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ShoppingListComponent } from './shopping-list.component';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('létrehozza a komponenst', () => {
    expect(component).toBeTruthy();
  });

  it('kezdetben létezik az items tömb', () => {
    expect(component.items).toBeTruthy();
    expect(Array.isArray(component.items)).toBeTrue();
  });

  it('az item objektum name és bought mezőket tartalmaz', () => {
    expect(component.items[0].hasOwnProperty('name')).toBeTrue();
    expect(component.items[0].hasOwnProperty('bought')).toBeTrue();
  });

  it('hozzáad egy új elemet', () => {
    component.newItem = 'Alma';
    component.addItem();

    expect(component.items[component.items.length - 1].name).toBe('Alma');
    expect(component.items[component.items.length - 1].bought).toBeFalse();
    expect(component.newItem).toBe('');
  });

  it('nem ad hozzá üres elemet', () => {
    const initialLength = component.items.length;

    component.newItem = '   ';
    component.addItem();

    expect(component.items.length).toBe(initialLength);
  });

  it('töröl egy elemet', () => {
    const initialLength = component.items.length;

    component.removeItem(0);

    expect(component.items.length).toBe(initialLength - 1);
  });

  it('váltja a bought állapotot', () => {
    const initialState = component.items[0].bought;

    component.toggleBought(0);

    expect(component.items[0].bought).toBe(!initialState);
  });

  it('megjeleníti az elemeket a listában', () => {
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('ul li'));

    expect(items.length).toBe(component.items.length);
  });

  it('a hozzáadás gomb működik a template-ből', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;

    input.value = 'Narancs';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    addButton.click();
    fixture.detectChanges();

    expect(component.items[component.items.length - 1].name).toBe('Narancs');
  });

  it('létezik törlés gomb minden listaelemnél', () => {
    fixture.detectChanges();
    const removeButtons = fixture.debugElement.queryAll(By.css('.remove-btn'));

    expect(removeButtons.length).toBe(component.items.length);
  });

  it('létezik bought váltó gomb minden listaelemnél', () => {
    fixture.detectChanges();
    const boughtButtons = fixture.debugElement.queryAll(By.css('.bought-btn'));

    expect(boughtButtons.length).toBe(component.items.length);
  });
});