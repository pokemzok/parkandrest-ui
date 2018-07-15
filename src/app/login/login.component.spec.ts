import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {ModalModule} from 'ngx-modal';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../app.module';
import {HttpClient} from '@angular/common/http';
import {FormInputComponent} from '../form/input/form-input.component';
import {FooterComponent} from '../footer/footer.component';
import {FormSubmitComponent} from '../form/submit/form-submit.component';
import {Auth} from '../auth/auth.interface';
import {LoginRequest} from './login.request';
import {RouterModule} from '@angular/router';
import {LoginAuthGuard} from '../auth/guard/login-authguard.service';

class MockAuth implements Auth {

  constructor() {}

  authenticate (loginRequest: LoginRequest ) {}

  deauthenticate() {}
}

// FIXME No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.
describe('LoginComponentSpec', () => {
  const authServiceMock: Auth = new MockAuth();
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        ModalModule,
        RouterModule.forRoot([ {path: '', canActivate: [LoginAuthGuard], component: LoginComponent}]),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
          }
        })
      ],
      declarations: [LoginComponent, FormInputComponent, FormSubmitComponent, FooterComponent],
      providers: [{provide: 'AuthService', useValue: authServiceMock}]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when to few characters', () => {
    component.loginForm.setValue({'username': 'aaa'});
    expect(component.loginForm.invalid).toBeTruthy()
  });
});

