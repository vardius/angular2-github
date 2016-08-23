import { TestBed } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [NavbarComponent]});
    });

    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(NavbarComponent);
        expect(fixture.componentInstance instanceof NavbarComponent).toBe(true, 'should create NavbarComponent');
    });

    it('should have expected <a> text', () => {
        let fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();

        let a = fixture.debugElement.query(By.css('a.navbar-brand')).nativeElement;
        expect(a.innerText).toMatch(/GitHubSearch/i, '<a> should say something about "GitHubSearch"');
    });
});
