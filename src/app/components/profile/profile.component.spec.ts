import { TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [ProfileComponent]});
    });

    it('should instantiate component', () => {
        let fixture = TestBed.createComponent(ProfileComponent);
        expect(fixture.componentInstance instanceof ProfileComponent).toBe(true, 'should create ProfileComponent');
    });
});
