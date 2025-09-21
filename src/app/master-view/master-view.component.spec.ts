import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_DROP_DOWN_DIRECTIVES, IgxIconButtonDirective, IgxAvatarComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxBadgeComponent } from 'igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterViewComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IGX_DROP_DOWN_DIRECTIVES, IgxIconButtonDirective, IgxAvatarComponent, IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
