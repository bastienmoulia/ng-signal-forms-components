import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgdsfFieldGroup } from './field-group';

describe('NgdsfFieldGroup', () => {
  let component: NgdsfFieldGroup;
  let fixture: ComponentFixture<NgdsfFieldGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgdsfFieldGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(NgdsfFieldGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title when provided', () => {
    fixture.componentRef.setInput('params', { title: 'Personal Information' });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.field-group-title');
    expect(title?.textContent).toContain('Personal Information');
  });

  it('should render description when provided', () => {
    fixture.componentRef.setInput('params', { 
      title: 'Contact Details',
      description: 'Please provide your contact information' 
    });
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const description = compiled.querySelector('.field-group-description');
    expect(description?.textContent).toContain('Please provide your contact information');
  });
});
